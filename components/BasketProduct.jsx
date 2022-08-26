import React from "react"
import styles from "../styles/basketProduct.module.scss"
import Image from "next/image"

const BasketProduct = ({ product }) => {
  return (
    <div className={styles.basketProductContainer}>
      <div className={styles.leftSection}>
        <div className={styles.imgAndDesc}>
          <div className={styles.imgContainer}>
            <Image
              src={product.image}
              layout="fill"
              alt={`image of ${product.title}`}
              objectFit="contain"
            />
          </div>
          <div className={styles.descContainer}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Qté : {product.qte}</p>
          </div>
        </div>

        <div className={styles.priceContainer}>{product.price} €</div>
      </div>
    </div>
  )
}

export default BasketProduct
