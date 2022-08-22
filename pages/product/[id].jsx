import Image from "next/image"
import React, { useState, useEffect } from "react"
import styles from "../../styles/ProductPage.module.scss"
import { useRouter } from "next/router"
import { fetchData } from "next-auth/client/_utils"

const Product = ({ product }) => {
  return (
    <>
      {product && (
        <main className={styles.productPageContainer}>
          <div className={styles.leftProductContainer}>
            <div className={styles.imgProductContainer}>
              <Image src={product.image} layout="fill" alt={product.title} />
            </div>
          </div>
          <div className={styles.rightDescriptioncontainer}>
            <h3>{product.title}</h3>
            <div className={styles.productRatingContainer}>
              <span>{product.rating.rate}⭐</span>{" "}
              <span>{product.rating.count} évaluations</span>
            </div>
            <p className={styles.productPrice}>{product.price} €</p>
            <p className={styles.propos}>À propos de cet article :</p>
            <p className={styles.productDesc}>{product.description}</p>
          </div>
          <aside className={styles.addProduct}>
            <p className={styles.productPrice}>{product.price} €</p>
            <div className={styles.shippingAddress}>addresse</div>
            <p className={styles.inStock}>En stock</p>
            <div className={styles.qte}>
              Quantité :{" "}
              <select className={styles.selectQte}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button className={styles.addToBasket}>Ajouter au panier</button>
          </aside>
        </main>
      )}
    </>
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
    revalidate: 8000,
  }
}
export default Product