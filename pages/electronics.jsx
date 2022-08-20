import React from "react"

const Electronics = ({ electronics }) => {
  return <div>{electronics[0].title}</div>
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
