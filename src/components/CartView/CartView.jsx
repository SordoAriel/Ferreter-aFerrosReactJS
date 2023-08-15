import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./CartView.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"

function CartView() {
    const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);
  
    return (
      <div>
        {cart.length === 0 ? (
          <h2>No tienes productos en el carrito</h2>
        ) : (
          <div>
            <h1>Tus productos seleccionados:</h1>
            {cart.map((item) => (
              <div className="productsInCart" key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <span>Precio por unidad: ${item.price}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Total: ${item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faTrashCan} className="cartIcon" />
                </button>
              </div>
            ))}
            <h2 className="productsInCart">
              Monto total a pagar: ${getTotalPriceInCart()}
            </h2>
            <div className="btnContainer">
                <button className="cartBtn">Vaciar carrito</button>
                <button className="cartBtn">Finalizar compra</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default CartView;