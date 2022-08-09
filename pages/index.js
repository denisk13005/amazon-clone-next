import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Product from "../components/Product";
import { GiH2O } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";

export default function Home({ best }) {
  console.log(best.bestsellers.length);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(best.bestsellers.splice(0, 45));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon next clone</title>
        <meta name="description" content="Amazon clone project" />
        <link rel="icon" href="./favicon.png" />
      </Head>
      {/* <main className={styles.homeMainContainer}>
        <section className={styles.productsContainer}>
          <div className={styles.productRow}>
            {products &&
              products.map((product, i) => (
                <Product
                  key={product.position}
                  id={2}
                  description={product.title}
                  price={product.price.value}
                  smallPrice={1}
                  stars={3}
                  img={product.image}
                />
              ))}

          </div>
        </section>
      </main> */}
    </div>
  );
}
export const getServerSideProps = async () => {
  const data = await fetch(
    "https://api.rainforestapi.com/request?api_key=71C75272191A49318764879A542638C6&type=bestsellers&url=https://www.amazon.com/s/zgbs/pc/516866"
  ).then((res) => res.json());
  return {
    props: {
      best: data,
    },
  };
};
