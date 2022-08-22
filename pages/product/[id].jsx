import Image from "next/image"
import React, { useState, useEffect } from "react"
import styles from "../../styles/Product.module.scss"
import { useRouter } from "next/router"
import { fetchData } from "next-auth/client/_utils"

const Product = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imgProductContainer}>
        <Image
          src={product && product.image}
          layout="fill"
          alt={product && product.title}
        />
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const datas = await fetch(`https://fakestoreapi.com/products`).then((res) =>
    res.json()
  )

  const paths = datas.map((data) => ({
    params: { id: data.id.toString() },
  }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
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
