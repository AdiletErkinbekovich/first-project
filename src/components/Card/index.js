import styles from './Card.module.scss';
import React from 'react';

function Card({ imageUrl, title, price, clickPlus }) {

  const [added, setAdded] = React.useState(false);

  const clickedPlus = () => {
    clickPlus({ imageUrl, title, price });
    setAdded(!added);
  };


 

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          className={styles.favourited}
          src={ '/images/favourited.svg' }
          alt="heart"
        />
        <img className={styles.cardImg} src={imageUrl} alt="sneakers" />
      </div>
      <p className="cardTitle">{title}</p>
      <div className={styles.cardPrice}>
        <div className={styles.priceWrapper}>
          <p>Цена:</p>
          <b>{price}</b>
        </div>
        <img
          onClick={clickedPlus}
          src={added ? '/images/buttonSelected.svg' : '/images/buttonImage.svg'}
          alt="select"
        />
      </div>
    </div>
  );
}

export default Card;
