import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import React from 'react';
import Overlay from './components/Overlay.js';

const sneakers = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 1763,
    imageUrl: '/images/image 1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 4000,
    imageUrl: '/images/image 2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Lebron Low',
    price: 3500,
    imageUrl: '/images/image 3.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Lebron Low',
    price: 3600,
    imageUrl: '/images/image 7.jpg',
  },
];

function App() {
  const [clickedCart, setClickedCart] = React.useState(false);

  return (
    <div className="wrapper ">
      {clickedCart && <Overlay closingCart={() => setClickedCart(false)} />}
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
            {sneakers.map((obj) => (
              <Card title={obj.title} price={obj.price + ' руб.'} imageUrl={obj.imageUrl} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
