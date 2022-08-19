import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.scss"
import Product from "../components/Product"
import { GiH2O } from "react-icons/gi"
import { useState } from "react"
import { useEffect } from "react"

export default function Home({ best }) {
  console.log(best)
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
      <section className={styles.galeryContainer}>
        galery container
        <Image
          src="/test.jpg"
          width="100%"
          height="30%"
          alt="img"
          layout="responsive"
        />
      </section>
      <section className={styles.productsContainer}>Products container</section>
    </div>
  )
}
export const getServerSideProps = async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json())

  return {
    props: {
      best: data,
    },
  }
}
