import React, { useEffect, useState } from "react"
import Link from "next/link"
import styles from "../styles/header.module.scss"
import Router from "next/router"
// import basket from "../../assets/img/basket.png";
// import search from "../../assets/img/search.svg";
// import { useNavigate, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import CompteModal from "../CompteModal/CompteModal";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import Image from "next/image"
import { useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()
  const [user, setUser] = useState("denis")
  const [basketItems, setBasketItems] = useState(0)
  // const navigate = useNavigate();

  //redux state
  // const logged = useSelector((state) => state.user.userLoggedIn);
  // const userLogged = useSelector((state) => state.user.informations[0]);
  // const basketItems = useSelector((state) => state.products.basketItems);
  //local state
  // const [user, setUser] = useState("");
  // const [compteModalClassName, setCompteModalClassName] = useState("none");

  // const loggIn = () => {
  //   navigate("/");
  // };
  // useEffect(() => {
  //   userLogged && setUser(userLogged.name);
  // }, [userLogged]);

  // const openModal = () => {
  //   setCompteModalClassName("visible");
  // };
  // const closeModal = () => {
  //   setCompteModalClassName("none");
  // };
  return (
    <header className={styles.header}>
      <div className={styles.leftOptions}>
        <div className={styles.hambAndLogo}>
          <div className={styles.hambContainer}>
            <GiHamburgerMenu className={styles.hambIcon} />
          </div>
          <Link href="/" passHref>
            <img
              className={styles.logo}
              src="./favicon.png"
              alt="amazon logo"
            />
          </Link>
          <span className={styles.fr}>.fr</span>
        </div>
      </div>

      <nav
        className={styles.rightOptions}
        // onMouseEnter={closeModal}
      >
        <div className={styles.mobileUserIcon}>
          <p
            className={styles.connect}
            // onClick={loggIn}
          >
            {session ? `${session.user.name}` : "Se connecter >"}
          </p>

          <span>
            <FaRegUser className={styles.userIcon} />
          </span>
        </div>
        <div className={styles.desktopUserInfos}>
          <div className={styles.userDesktopAccount}>
            <p>
              Bonjour,{session ? `${session.user.name}` : `Identifiez-vous`}
              <br />
              <span>Compte et listes </span>
            </p>
          </div>
          <div className={styles.userDesktopShipping}>
            <p>
              Retours <br />
              <span>et commandes</span>{" "}
            </p>
          </div>
        </div>
        <div className={styles.basketContainer}>
          <Image
            className={styles.basketImg}
            src="/basket.png"
            alt="basket icon"
            width="50%"
            height="50%"
          />
          <span className={styles.itemsNb}>10</span>
        </div>
      </nav>
      <div
        className={styles.search}
        //  onMouseEnter={closeModal}
      >
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Rechercher Amazon.fr"
        />
        <div className={styles.magnifyingGlassContainer}>
          <AiOutlineSearch className={styles.magnifyingGlass} />
        </div>
      </div>
      <div className={styles.choiceContainer}>
        <span className={styles.span}>Amazon Basics</span>
        <span className={styles.span}>Ventes Flash</span>
        <span className={styles.span}>Prime</span>
        <span className={styles.span}>Meilleures ventes</span>
        <span className={styles.span}>Dernières Nouveautés</span>
        <span className={styles.span}>Cuisine et Maison</span>
        <span className={styles.span}>Livres</span>
        <span className={styles.span}>High-Tech</span>
      </div>
    </header>
  )
}

export default Header
