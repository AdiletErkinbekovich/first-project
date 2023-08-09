import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import CartItem from './components/CartItem'
function App() {
  return (
    
    <div className="wrapper ">
      <div className="overlay">
      </div>
          <div className="drawer">
            <div className='drawerTitle'><p>Корзина</p> <img src="./images/cartItemButton.svg" alt="button" /></div>
            <div className="cartItems">
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
            </div>
            <div className='total'>
              <ul>
                <li>
                  <p className='totalCost'>Итого :  </p>
                  <div className='dashed'> </div>
                  <p className='totalPrice'>21 498руб.</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className='tax'>Налог 5% :  </p>
                  <div className='dashed' > </div>
                  <p className='totalPrice'>1074 руб.</p>
                </li>
              </ul>
              <button type='submit' className='totalButton'>Оформить заказ <img src="/images/totalButton.svg" alt="next" /></button>
            </div>
          </div>
       
      <Header />
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        
        
      </main>
      
    </div>
  );
}

export default App;
