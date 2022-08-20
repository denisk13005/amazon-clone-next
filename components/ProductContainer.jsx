import React from "react"
import Image from "next/image"
import styles from "../styles/productContainer.module.scss"

const ProductContainer = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      {/* <Image src={product.image} alt="img" layout="fill" /> */}
    </div>
  )
}

export default ProductContainer
