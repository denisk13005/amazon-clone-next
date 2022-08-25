import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/BasketPage.module.scss"
import { useSelector } from "react-redux"
import BasketProduct from "../components/BasketProduct"

const Basket = () => {
  const products = useSelector((state) => state.products.products)
  const productsState = useSelector((state) => state.products)
  console.log(products)
  return products.length === 0 ? (
    <main className={styles.emptyBasketMain}>
      <div className={styles.emptyImgContainer}>
        <Image
          src="https://m.media-amazon.com/images/G/08/cart/empty/kettle-desaturated._CB424694058_.svg"
          alt="img"
          layout="fill"
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
          <>
            <BasketProduct product={product} />
          </>
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
      <section className={styles.rightSection}></section>
    </main>
  )
}

export default Basket
