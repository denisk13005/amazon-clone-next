import React from "react";
// import { useDispatch } from "react-redux"
// import { addProduct } from "../../utils/Redux-toolkit/products"
import { MdAddShoppingCart } from "react-icons/md";
// import PropTypes from "prop-types"
import styles from "../styles/product.module.css";

/**
 *
 * @param {string} description description of the product
 * @param {number} price price of the product
 * @param {number} smallPrice cts price of the product in small format
 * @param {number} stars number of stars of the product
 * @param {string} img url of the product image
 * @param {number} id id of the product
 * @returns {JSX.Element} JSX element of the product
 */
const Product = ({ description, price, smallPrice, stars, img, id, width }) => {
  // const product = { description, price, smallPrice, stars, img, id, width };
  // const dispatch = useDispatch()
  const addBasket = () => {
    // dispatch(addProduct(product))
    console.log("click");
  };

  return (
    <div className={styles.product} style={{ width: width + "%" }}>
      <div className={styles.upProductContainer}>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>
          €<strong>{price}</strong>.<small>{smallPrice}</small>
        </p>
        <div className="product__stars">
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <div className={styles.imgAndButton}>
        <div className={styles.imgContainer}>
          <img src={img} alt="" className="product__image" />
        </div>
        {}
        <button className={styles.button} onClick={addBasket}>
          <span className={styles.desktopMsg}>Ajouter au panier</span>{" "}
          <span className="mobileICon">
            <MdAddShoppingCart className="basketIcon" />
          </span>
        </button>
      </div>
    </div>
  );
};

// Product.propTypes = {
//   description: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   smallPrice: PropTypes.number.isRequired,
//   stars: PropTypes.number.isRequired,
//   img: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default Product;
