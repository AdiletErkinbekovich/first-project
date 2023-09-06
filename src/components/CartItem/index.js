import styles from './CartItem.module.scss';

function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItemImg} src={props.imageUrl} alt="sneakers" />
      <div className={styles.cartItemText}>
        <p className={styles.cartItemTitle}>{props.title}</p>
        <p className={styles.cartItemPrice}>{props.price}</p>
      </div>
      <img className={styles.cartItemButton} src="/images/cartItemButton.svg" alt="button" />
    </div>
  );
}
export default CartItem;
