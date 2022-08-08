import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";
import Router from "next/router";
// import basket from "../../assets/img/basket.png";
// import search from "../../assets/img/search.svg";
// import { useNavigate, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import CompteModal from "../CompteModal/CompteModal";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  const [logged, setLogged] = useState(true);
  const [basketItems, setBasketItems] = useState(0);
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
        </div>
        <div
          className={styles.search}
          //  onMouseEnter={closeModal}
        >
          <input type="search" />
          <div className={styles.searchImgContainer}>
            <AiOutlineSearch className={styles.magnifyingGlass} />
            {/* <img src={search} alt="search icone" className="magnifyingGlass" /> */}
          </div>
        </div>
      </div>

      <nav
        className={styles.rightOptions}
        // onMouseEnter={closeModal}
      >
        {logged ? (
          <>
            <div
              className={`${styles.rightOptions__option} ${styles.rightOptions__optionUser}`}
              // onMouseEnter={openModal}
            >
              <div className={styles.userDescriptionContainer}>
                <div>
                  <span className={styles.bonjour}>Bonjour, </span>
                  {/* <span className="user">{user}</span> */}
                </div>

                <div className={styles.userIconContainer}>
                  <FaRegUser className={styles.userIcon} />
                </div>
                <span>
                  <strong className={styles.compte}>Compte et listes</strong>
                </span>
                {/* <CompteModal
                  className={compteModalClassName}
                  closeModal={closeModal}
                /> */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.rightOptions__option} onClick={loggIn}>
              Hello Guest <br />
              <strong>Please LoggIn</strong>
            </div>
          </>
        )}

        <div
          className={`${styles.rightOptions__option} ${styles.rightOptions__optionReturn}`}
          // onMouseEnter={closeModal}
        >
          Retours
          <br />
          <strong>et Commandes</strong>
        </div>
        <div
          className={`${styles.rightOptions__option} ${styles.rightOptions__optionBasket}`}
          onClick={() => Router.push("/basket")}
        >
          <div className={styles.imgContainer}>
            <GiShoppingCart className={styles.cartIcon} />
            <span className={styles.cartItems}>{basketItems}</span>
          </div>
          <strong className={styles.panier}>Panier</strong>
        </div>
      </nav>
    </header>
  );
};

export default Header;
