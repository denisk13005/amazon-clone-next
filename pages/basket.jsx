import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/BasketPage.module.scss"
import { useSelector } from "react-redux"
import BasketProduct from "../components/BasketProduct"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

const Basket = () => {
  const products = useSelector((state) => state.products.products)
  const productsState = useSelector((state) => state.products)
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const stripePromise = loadStripe(publishableKey)

  const [item, setItem] = useState({
    name: "payment",
    description: "payment for your order",
    image: "./basket.png",
    quantity: 1,
    price: productsState.totalPrice,
  })
  const createCheckOutSession = async () => {
    const stripe = await stripePromise
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: item,
    })
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })
    if (result.error) {
      alert(result.error.message)
    }
  }
  return products.length === 0 ? (
    <main className={styles.emptyBasketMain}>
      <div className={styles.emptyImgContainer}>
        <Image
          src="/empty_basket.svg"
          alt="img"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.emptyTextContainer}>
        <h3>Votre Panier Amazon est vide</h3>
        <Link href="/" passHref>
          <button>{`Retournez à l'accueil`}</button>
        </Link>
      </div>
    </main>
  ) : (
    <main className={styles.basketPageMain}>
      <section className={styles.productsContainer}>
        <div className={styles.header}>
          <h2>Votre Panier</h2>
          <span>Prix</span>
        </div>

        {products.map((product) => (
          <div key={product.title}>
            <BasketProduct product={product} />
          </div>
        ))}
        <div className={styles.subtotal}>
          <p>
            Sous-total{" "}
            {`( ${productsState.basketItems} ${
              productsState.basketItems == 1 ? "article" : "articles"
            })`}
            :
            <span className={styles.subtotalPrice}>
              {productsState.totalPrice} €
            </span>
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.subtotal}>
          <p>
            Sous-total{" "}
            {`( ${productsState.basketItems} ${
              productsState.basketItems == 1 ? "article" : "articles"
            })`}
            :
            <span className={styles.subtotalPrice}>
              {productsState.totalPrice} €
            </span>
          </p>
        </div>
        <button onClick={createCheckOutSession}>Passer la commande</button>
      </section>
    </main>
  )
}

export default Basket
