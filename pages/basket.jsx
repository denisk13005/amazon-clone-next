import React from "react"
import styles from '../styles/BasketPage.module.scss'
import { useSelector } from "react-redux"

const Basket = () => {
  const products = useSelector((state) => state.products.products)
  console.log(products)
  return <main className={styles.mainBasket}></main>
}

export default Basket
