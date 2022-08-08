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
      <main className={styles.homeMainContainer}>
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

            {/*
            <Product
              id={3}
              description={"test"}
              price={655}
              smallPrice={8}
              stars={3}
              img={
                "https://m.media-amazon.com/images/I/71Qd4S8SbtL._AC_SX352_SY330_.jpg"
              }
            />
          </div>
          <div className={styles.productRow}>
            <Product
              id={4}
              description={"test"}
              price={300}
              smallPrice={5}
              stars={3}
              img={
                "https://images-na.ssl-images-amazon.com/images/I/41LcAKXQyJL._AC_SR400,600_.jpg"
              }
            />

            <Product
              id={5}
              description={"test"}
              price={239}
              smallPrice={5}
              stars={3}
              img={
                "https://images-na.ssl-images-amazon.com/images/I/41aCosV70jL._AC_SR400,600_.jpg"
              }
            />
          </div>
          <div className={styles.productRow}>
            <Product
              width={100}
              id={6}
              description={"test"}
              price={29}
              smallPrice={5}
              stars={3}
              img={
                "https://images-eu.ssl-images-amazon.com/images/I/71g8a2BcgRL._AC_UL160_SR160,160_.jpg"
              }
            /> */}
          </div>
        </section>
      </main>
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
