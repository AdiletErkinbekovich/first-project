import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import React from 'react';
import Overlay from './components/Overlay.js';

function App() {
  const [clickedCart, setClickedCart] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://64e1187450713530432cf230.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  });

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper ">
      {clickedCart && <Overlay items={cartItems} closingCart={() => setClickedCart(false)} />}
      <Header clickingCart={() => setClickedCart(true)} />

      <main>
        <div className="searchBlock">
          <div className="container">
            <div className="mainTitle">
              <h1 className="sneakersTitle">Все кроссовки</h1>
              <div className="sneakersSearch">
                <label>
                  <img src="../images/searchInput.svg" alt="search" />
                  <input className="searchInput" placeholder="Поиск..." type="search" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="sneakersCards">
          <div className="container">
            {items.map((obj) => (
              <Card
                clickPlus={addToCart}
                title={obj.title}
                price={obj.price + ' руб.'}
                imageUrl={obj.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
