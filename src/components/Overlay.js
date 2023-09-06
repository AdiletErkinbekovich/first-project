function Overlay({ items = [], closingCart }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTitle">
          <p>Корзина</p>
          <img onClick={closingCart} src="./images/cartItemButton.svg" alt="button" />
        </div>
        <div className="cartItems">
          {items.map((obj) => (
            <div className="cartItem">
              <img className="cartItemImg" src={obj.imageUrl} alt="sneakers" />
              <div className="cartItemText">
                <p className="cartItemTitle">{obj.title}</p>
                <p className="cartItemPrice">{obj.price} руб.</p>
              </div>
              <img className="cartItemButton" src="/images/cartItemButton.svg" alt="button" />
            </div>
          ))}

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
    </div>
  );
}

export default Overlay;
