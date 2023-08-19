function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="headerLeft">
          <img src="/images/header__icon.png" alt="icon" />
          <div className="text">
            <h3 className="title">REACT SNEaKers</h3>
            <p className="subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li onClick={props.clickingCart} className="cart">
            <img src="/images/cart.svg" alt="cart" />
            <p>1205руб.</p>
          </li>
          <li className="favourite">
            <img src="/images/favourite.svg" alt="favIcon" />
          </li>

          <li className="user">
            <img src="/images/user.svg" alt="favIcon" />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
