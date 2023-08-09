function CartItem(){
  return(
    <div className="cartItem">
              <img className='cartItemImg' src="/images/image 3.jpg" alt="sneakers" />
              <div className="cartItemText">
                <p className="cartItemTitle">Мужские Кроссовки Nike Air Max 270</p>
                <p className="cartItemPrice">13 900руб.</p>
              </div>
              <img className="cartItemButton" src="/images/cartItemButton.svg" alt="button" />
            </div>
  )
}
export default CartItem