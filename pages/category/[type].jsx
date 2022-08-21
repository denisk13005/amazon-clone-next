import React from "react"
import styles from "../../styles/TypeOfCategory.module.scss"

const TypeOfCategory = ({ datas }) => {
  console.log(datas)
  return (
    <section className={styles.typeOfCategoryContainer}>
      type Of category
    </section>
  )
}

export const getServerSideProps = async ({ params }) => {
  console.log(params)
  const type = params.type
  console.log(type)
  const datas = await fetch(
    `https://fakestoreapi.com/products/category/${type}`
  ).then((res) => res.json())
  return {
    props: {
      datas,
    },
  }
}
export default TypeOfCategory
