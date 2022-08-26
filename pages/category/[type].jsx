import React from "react"
import styles from "../../styles/TypeOfCategory.module.scss"
import Layout from "./../../components/Layout"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/productsSlice"

const TypeOfCategory = ({ products }) => {
  const dispatch = useDispatch()

  return (
    <section className={styles.typeOfCategoryBody}>
      <div className={styles.typeOfCategoryContainer}>
        {products &&
          products.map((product) => (
            <div
              className={styles.typeOfCategoryProductContainer}
              key={product.id}
            >
              <Link href="/product/[id]" as={`/product/${product.id}`} passHref>
                <div className={styles.typeOfCategoryImgContainer}>
                  <Image
                    className={styles.typeOfCategoryImg}
                    src={`${product.image}`}
                    layout="fill"
                    objectFit="contain"
                    alt={`${product.title}`}
                  />
                </div>
              </Link>
              <div className={styles.typeOfCategoryProductDescriptionContainer}>
                <p className={styles.typeOfCategoryTitle}>{product.title}</p>
                <div className={styles.productRatingContainer}>
                  <span>{product.rating.rate}⭐</span>{" "}
                  <span>{product.rating.count}</span>
                </div>
                <div className={styles.productPrice}>{product.price} €</div>
                <button
                  onClick={() => dispatch(addProduct({ ...product, qte: 1 }))}
                  className={styles.button}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export const getStaticPaths = async () => {
  const datas = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json())
  const paths = datas.map((data) => ({ params: { type: data.toString() } }))
  return { paths, fallback: true }
}
export const getStaticProps = async ({ params }) => {
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
    revalidate: 8000,
  }
}
export default TypeOfCategory
