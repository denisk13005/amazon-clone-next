import React from "react"
import CategoryContainer from "./../components/CategoryContainer"
import styles from "../styles/categoryPages.module.scss"

const Electronics = ({ electronics }) => {
  return (
    <div className={styles.mainCategoryContainer}>
      {electronics.map((el) => (
        <CategoryContainer key={el.id} />
      ))}
    </div>
  )
}

export default Electronics
export const getStaticProps = async () => {
  const electronics = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((res) => res.json())

  return {
    props: {
      electronics,
    },
  }
}
