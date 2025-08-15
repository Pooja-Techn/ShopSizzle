import { useContext, useEffect } from "react";
import styles from "../styles/Item.module.css";
import Loginstyles from  "../styles/LoginPage.module.css";
import { useProductValue } from "../productContext";
import CartCard from "./CartCard";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, getCartItems, handleAddOrders, totalPriceSelector } from "./redux/reducers/productReducer";
import { authenticationSelector } from "./redux/reducers/authenticationReducer";

function Cartpage(){
   
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector)
    const userID = useSelector(authenticationSelector)
    const totalPrice = useSelector(totalPriceSelector)
    useEffect(()=>
    {
        dispatch(getCartItems({userID}))
    } ,[])
        
    return (
        <div>
               {totalPrice!==0?<>
                <div className={styles.left_div}><h1> {totalPrice}</h1>
             <NavLink to="/myorders"> <button className={Loginstyles.SignInButton} onClick={()=> { dispatch(handleAddOrders({userID, totalPrice,cart  }))}} >Purchase</button></NavLink></div>    </>
              :undefined}    
        <div className={styles.wrapper_div}>

        { (cart || []).length>0? cart.map((d) => (     
           <CartCard key={d.id} id={d.id} name={d.Name} price={d.Price} imageurl={d.ImageUrl} quantity={d.Quantity} />
          )): <h1> Cart is empty</h1>
        
        }
        </div>
        </div>
    
      );
    }

export default Cartpage;