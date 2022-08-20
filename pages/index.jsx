import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.scss"
import Product from "../components/Product"
import { GiH2O } from "react-icons/gi"
import { useState } from "react"
import { useEffect } from "react"
import ProductContainer from "../components/ProductContainer"

export default function Home({ allProducts, electronics, jewelery }) {
  console.log(allProducts, electronics, jewelery)
  // console.log(best.bestsellers.length);
  const [products, setProducts] = useState([])
  // useEffect(() => {
  //   setProducts(best.bestsellers.splice(0, 45));
  // }, []);
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Amazon next clone</title>
        <meta name="description" content="Amazon clone project" />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.galeryContainer}>
          <Image src="/fond.webp" layout="fill" />
        </section>
        <section className={styles.productsContainer}>
          {allProducts &&
            allProducts.map((product) => (
              <ProductContainer key={product.title} product={product} />
            ))}
        </section>
      </main>
    </div>
  )
}
export const getServerSideProps = async () => {
  const allProducts = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  const electronics = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json())
  const jewelery = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  ).then((res) => res.json())

  return {
    props: {
      allProducts,
      electronics,
      jewelery,
    },
  }
}
