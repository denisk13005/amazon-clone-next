import React from "react"
import Image from "next/image"
import styles from "../styles/BasketPage.module.scss"
import { useSelector } from "react-redux"

const Basket = () => {
  const products = useSelector((state) => state.products.products)
  console.log(products)
  return products.length === 0 ? (
    <section className={styles.emptyBasketSection}>
      <div className={styles.emptyImgContainer}>
        <Image
          src="https://m.media-amazon.com/images/G/08/cart/empty/kettle-desaturated._CB424694058_.svg"
          alt="img"
          layout="fill"
        />
      </div>
      <div className={styles.emptyTextContainer}>
        <h3>Votre Panier Amazon est vide</h3>
        <button>{`Retournez à l'accueil`}</button>
      </div>
    </section>
  ) : (
    <section>1</section>
  )
}

export default Basket
