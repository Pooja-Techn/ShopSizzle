import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import { addDoc, collection, getDoc, doc,getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import productContext, { useProductValue } from "../productContext";
import authenticationContext from "../authenticationContext";
import Home from "./Home";
import { db } from "../firebaseInit";
import { useDispatch, useSelector} from "react-redux";
import { handleAdd } from "./redux/reducers/productReducer";
import { authenticationSelector } from "./redux/reducers/authenticationReducer";
function ProductCard({ id, name, price, imageurl }) {
  const dispatch = useDispatch()
  const userID = useSelector(authenticationSelector)

  return (
    <div className={styles.itemCard} >
      <div className={styles.imagecontainerdiv}>
        <img className={styles.imagecontainer} src={imageurl} alt={name}></img>
      </div>

      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={()=> dispatch(handleAdd({userID,name, price, imageurl}))} >
          Add
        </button>
      </div>
    </div>


  );

}
export default ProductCard;
