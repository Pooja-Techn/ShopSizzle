import { useProductValue } from "../productContext"
import { useContext, useEffect } from "react";
import styles from "../styles/Item.module.css";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, orderSelector, totalPriceSelector } from "./redux/reducers/productReducer";
import { authenticationSelector } from "./redux/reducers/authenticationReducer";

function Orderpage() {
  const dispatch = useDispatch();
  const userID = useSelector(authenticationSelector)
  const orders = useSelector(orderSelector)
  const totalPrice = useSelector(totalPriceSelector)

    useEffect(()=>
        {
            dispatch(getOrders({userID}))
    }  ,[])

    return (
        <div key={userID}>           
        <div className={styles.wrapper_div_order}>
         { orders && orders.length>0? orders.map((od) => (         
            <OrderCard key={od.id} orders={od.Orders} totalprice={od.TotalPrice} created={od.createdOn}/>
            
          )
          //here have to add <h1></h1>
         ): <h1> No Orders Placed</h1>
        } 
        
        </div>
        </div>
    
      );
    
}

export default Orderpage;
