import Image from "next/image"
import React, { useState, useEffect } from "react"
import styles from "../../styles/Product.module.scss"
import { useRouter } from "next/router"
import { fetchData } from "next-auth/client/_utils"

const Product = () => {
  const [product, setProduct] = useState({})
  const router = useRouter()
  const id = parseInt(router.query.id)

  const url = `https://fakestoreapi.com/products/${id}`
  console.log(typeof id)

  useEffect(() => {
    console.log("test")
    const fetchData = async (id) => {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data)
      console.log(data)
      setProduct(data)
    }
    fetchData()
  }, [id, url])
  return (
    <div className={styles.productContainer}>
      <div className={styles.imgProductContainer}>
        <Image src={product.image} layout="fill" alt={product.title} />
      </div>
    </div>
  )
}
// export const getServerSideProps = async ({ params }) => {
//   const id = params.id
// const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
//     (res) => res.json()
//   )
//   return {
//     props: {
//       product,
//     },
//   }
// }
export default Product
