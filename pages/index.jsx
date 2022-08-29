import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import styles from "../styles/Home.module.scss"
import Product from "../components/Product"
import { GiH2O } from "react-icons/gi"
import { useState } from "react"
import { useEffect } from "react"
import HomeCategoryContainer from "../components/HomeCategoryContainer"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useSelector } from "react-redux"
export default function Home({ allProducts }) {
  const router = useRouter()
  const { data: session } = useSession()
  const [nbOrders, setnbOrders] = useState()
  console.log(nbOrders)
  const saveOrder = async () => {
    const datas = await JSON.parse(window.localStorage.getItem("order"))
    const products = await datas.products
    const totalPrice = await datas.totalPrice
    let dev = process.env.NODE_ENV !== "production"
    let server = dev
      ? "http://localhost:3000"
      : "https://amazon-clone-next-jade.vercel.app"
    await fetch(`${server}/api/orders`, {
      method: `${nbOrders === 0 ? "POST" : "PUT"} `,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderDate: new Date(),
        userId: session && session.user.name,
        totalPrice: totalPrice,
        order: products,
      }),
    })
    window.localStorage.removeItem("order")
  }
  // si on revient de la page de paiement stripe avec un message de succès on sauvegarde la commande en bdd
  useEffect(() => {
    router.query.status === "success" && saveOrder()
  }, [router.query.status])

  useEffect(() => {
    const getOrder = async () => {
      let dev = process.env.NODE_ENV !== "production"
      let server = dev
        ? "http://localhost:3000"
        : "https://amazon-clone-next-jade.vercel.app"
      const data = await fetch(`${server}/api/orders`).then((res) => res.json())
      setnbOrders(data.message[0].order.length)
    }
    getOrder()
  }, [])
  const [login, setLogin] = useState(true)

  const [products, setProducts] = useState([])

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Amazon next clone</title>
        <meta name="description" content="Amazon clone project" />
        <link rel="icon" href="./basket.png" />
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
export const getStaticProps = async () => {
  const allProducts = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )

  return {
    props: {
      allProducts,
    },
    revalidate: 30000,
  }
}
