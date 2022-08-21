import React from "react"

const TypeOfCategory = ({ datas }) => {
  console.log(datas)
  return <div>type Of category</div>
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
