import Image from "next/image"
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/productsSlice"
import styles from "../../styles/ProductPage.module.scss"

const Product = ({ datas }) => {
  const [product, setProduct] = useState()

  console.log(product)

  const dispatch = useDispatch()
  const addToBasket = () => {
    console.log(product)
    dispatch(addProduct(product))
    console.log(product.qte)
  }
  const modifyQte = (e) => {
    setProduct({ ...product, qte: parseInt(e.target.value) })
    console.log(product)
  }
  useEffect(() => {
    setProduct({ ...datas, qte: 1 })
  }, [datas])
  return (
    <>
      {product && (
        <main className={styles.productPageContainer}>
          <div className={styles.leftProductContainer}>
            <div className={styles.imgProductContainer}>
              <Image src={product.image} layout="fill" alt={product.title} />
            </div>
          </div>
          <div className={styles.rightDescriptioncontainer}>
            <h3>{product.title}</h3>
            <div className={styles.productRatingContainer}>
              <span>{product.rating.rate}⭐</span>{" "}
              <span>{product.rating.count} évaluations</span>
            </div>
            <p className={styles.productPrice}>{product.price} €</p>
            <p className={styles.propos}>À propos de cet article :</p>
            <p className={styles.productDesc}>{product.description}</p>
          </div>
          <div className={styles.addProduct}>
            <p className={styles.productPrice}>{product.price} €</p>
            <div className={styles.shippingAddress}>addresse</div>
            <p className={styles.inStock}>En stock</p>
            <div className={styles.qte}>
              Quantité :{" "}
              <select className={styles.selectQte} onChange={modifyQte}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button
              onClick={() => addToBasket()}
              className={styles.addToBasket}
            >
              Ajouter au panier
            </button>
          </div>
        </main>
      )}
    </>
  )
}

export const getStaticPaths = async () => {
  const datas = await fetch(`https://fakestoreapi.com/products`).then((res) =>
    res.json()
  )

  const paths = datas.map((data) => ({
    params: { id: data.id.toString() },
  }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const id = params.id
  const datas = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  )
  return {
    props: {
      datas,
    },
    revalidate: 8000,
  }
}
export default Product
