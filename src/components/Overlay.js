function Overlay(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTitle">
          <p>Корзина</p>
          <img onClick={props.closingCart} src="./images/cartItemButton.svg" alt="button" />
        </div>
        <div className="cartItems">
          <div className="cartItem">
            <img className="cartItemImg" src="/images/image 3.jpg" alt="sneakers" />
            <div className="cartItemText">
              <p className="cartItemTitle">Мужские Кроссовки Nike Air Max 270</p>
              <p className="cartItemPrice">13 900руб.</p>
            </div>
            <img className="cartItemButton" src="/images/cartItemButton.svg" alt="button" />
          </div>
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
