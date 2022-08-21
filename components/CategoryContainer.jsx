import React from "react"
import Image from "next/image"
import styles from "../styles/categoryContainer.module.scss"
import Link from "next/link"

const CategoryContainer = ({ products, title, background }) => {
  console.log(background)
  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.productsContainer}>
        {products &&
          products.slice(0, 4).map((product) => (
            <div className={styles.productContainer} key={product.id}>
              {/* <Link href={`/product`}> */}
              <div
                className={styles.productImageContainer}
                style={{ backgroundColor: `${background} ` }}
              >
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="contain"
                  alt={`photo de ${product.title}`}
                />
              </div>
              <p className={styles.productTitle}>{product.title}</p>
              {/* </Link> */}
            </div>
          ))}
      </div>
      <div className={styles.categoryLink}>
        <Link
          href="/category/[type]"
          as={`/category/${products && products[0].category}`}
          passHref
        >
          En savoir plus
        </Link>
      </div>
    </div>
  )
}

export default CategoryContainer
