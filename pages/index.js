import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Product from "../components/Product";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Amazon clone project" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="productsContainer">
        <div className="productRow">
          <Product
            id={1}
            description={"mmmmmmh c'est super "}
            price={12}
            smallPrice={2}
            stars={3}
            img={
              "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/RolandGarros/RG_2022_V2HUD_Reactive_XSite_379x304_PV_fr-FR._SY304_CB636920623_.jpg"
            }
          />
          <Product
            id={2}
            description={"test"}
            price={12}
            smallPrice={1}
            stars={3}
            img={
              "https://m.media-amazon.com/images/I/81vkislowDL._AC_SX352_SY330_.jpg"
            }
          />
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
        <div className="productRow">
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
        <div className="productRow">
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
          />
        </div>
      </section>
    </div>
  );
}
