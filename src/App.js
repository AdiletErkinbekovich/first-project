import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import React from 'react';
import Overlay from './components/Overlay.js';

function App() {
  const [clickedCart, setClickedCart] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

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
              <h1 className="sneakersTitle">
                {searchValue ? `Поиск по "${searchValue}"` : 'Все кроссовки'}
              </h1>
              <div className="sneakersSearch">
                <label>
                  {searchValue && (
                    <img
                      onClick={() => setSearchValue('')}
                      className="inputValueDelete"
                      src="/images/cartItemButton.svg"
                      alt="button"
                    />
                  )}
                  <img src="../images/searchInput.svg" alt="search" />

                  <input
                    onChange={(event) => {
                      setSearchValue(event.target.value);
                    }}
                    className="searchInput"
                    placeholder="Поиск..."
                    type="search"
                    value={searchValue}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="sneakersCards">
          <div className="container">
            {items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => (
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
// srabotay uje blin
export default App;
