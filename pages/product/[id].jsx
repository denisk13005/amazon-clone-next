import Image from "next/image"
import React from "react"
import styles from "../../styles/Product.module.scss"

const Product = ({ product }) => {
  console.log(product)
  return (
    <div className={styles.productContainer}>
      <div className={styles.imgProductContainer}>
        <Image src={product.image} layout="fill" alt={product.title} />
      </div>
    </div>
  )
}
export const getServerSideProps = async ({ params }) => {
  const id = params.id
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  )
  return {
    props: {
      product,
    },
  }
}
export default Product
