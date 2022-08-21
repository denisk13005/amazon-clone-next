import React from "react"
import styles from "../../styles/TypeOfCategory.module.scss"
import Layout from "./../../components/Layout"
import Image from "next/image"

const TypeOfCategory = ({ products }) => {
  console.log(products)
  return (
    <section className={styles.typeOfCategoryBody}>
      <div className={styles.typeOfCategoryContainer}>
        {products &&
          products.map((product) => (
            <div
              className={styles.typeOfCategoryProductContainer}
              key={product.id}
            >
              <div className={styles.typeOfCategoryImgContainer}>
                <Image
                  className={styles.typeOfCategoryImg}
                  src={`${product.image}`}
                  layout="fill"
                  objectFit="contain"
                  alt={`${product.title}`}
                />
              </div>
              <div className={styles.typeOfCategoryProductDescriptionContainer}>
                <p className={styles.typeOfCategoryTitle}>{product.title}</p>
                <div className={styles.productRatingContainer}>
                  <span>{product.rating.rate}⭐</span>{" "}
                  <span>{product.rating.count}</span>
                </div>
                <div className={styles.productPrice}>{product.price} €</div>
                <button className={styles.button}>Ajouter au panier</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export const getServerSideProps = async ({ params }) => {
  console.log(params)
  const type = params.type
  console.log(type)
  const products = await fetch(
    `https://fakestoreapi.com/products/category/${type}`
  ).then((res) => res.json())
  return {
    props: {
      products,
    },
  }
}
export default TypeOfCategory
