import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.scss"
import Product from "../components/Product"
import { GiH2O } from "react-icons/gi"
import { useState } from "react"
import { useEffect } from "react"
import HomeCategoryContainer from "../components/HomeCategoryContainer"

export default function Home({ allProducts }) {
  const [login, setLogin] = useState(true)

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
          <Image src="/fond.webp" layout="fill" alt="test" />
        </section>
        <section className={styles.categorySection}>
          <HomeCategoryContainer
            products={allProducts.filter(
              (product) => product.category === "electronics"
            )}
            title={"Electronics"}
            background={"#b9e2f6"}
          />
          <HomeCategoryContainer
            products={allProducts.filter(
              (product) => product.category === "jewelery"
            )}
            title={"Jewelery"}
            background={"rgba(0,164,180,.05)"}
          />
          <HomeCategoryContainer
            products={allProducts.filter(
              (product) => product.category === "men's clothing"
            )}
            title={"Men's clothes"}
            background={"rgba(0,164,180,.05)"}
          />
          <HomeCategoryContainer
            products={allProducts.filter(
              (product) => product.category === "women's clothing"
            )}
            title={"Women's clothes"}
            background={"rgba(0,164,180,.05)"}
          />
        </section>
      </main>
    </div>
  )
}
export const getServerSideProps = async () => {
  const allProducts = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )

  return {
    props: {
      allProducts,
    },
  }
}
