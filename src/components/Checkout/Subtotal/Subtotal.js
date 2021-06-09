import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../../contexts/StateProvider'
import { getBasketTotal } from '../../../contexts/reducer'

function Subtotal() {
  const [{basket}] = useStateValue()

  // const subtotalValue = () => {
  //   let totalPrice = 0

  //   for (let i=0; i < basket.length; i++) {
  //     totalPrice = totalPrice + Math.round(basket[i].price, -1)
  //   }

  //   return totalPrice
  // }

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
