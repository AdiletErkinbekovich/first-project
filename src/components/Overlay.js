import CartItem from './CartItem/index.js';
import React from 'react';

function Overlay(props) {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://64e1187450713530432cf230.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCartItems(json);
      });
  });

  return (
    <div onClick={props.closingCart} className="overlay">
      <div className="drawer">
        <div className="drawerTitle">
          <p>Корзина</p>
          <img onClick={props.closingCart} src="./images/cartItemButton.svg" alt="button" />
        </div>
        <div className="cartItems">
          {cartItems.map((obj) => (
            <CartItem title={obj.title} price={obj.price + ' руб.'} imageUrl={obj.imageUrl} />
          ))}
        </div>
        <div className="total">
          <ul>
            <li>
              <p className="totalCost">Итого : </p>
              <div className="dashed"> </div>
              <p className="totalPrice">21 498руб.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p className="tax">Налог 5% : </p>
              <div className="dashed"> </div>
              <p className="totalPrice">1074 руб.</p>
            </li>
          </ul>
          <button type="submit" className="totalButton">
            Оформить заказ <img src="/images/totalButton.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
