import styles from './Card.module.scss';
import React from 'react';

function Card(props) {
  // adding to cart function start

  const [added, setAdded] = React.useState(false);

  const clickedPlus = () => {
    setAdded(!added);
  };
  console.log(added);

  // adding to cart function end

  // adding to cart favourited start

  const [favourited, setFavourited] = React.useState(false);
  const unFavourited = () => {
    setFavourited(!favourited);
  };

  // adding to cart favourited end

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          onClick={() => unFavourited()}
          className={styles.favourited}
          src={favourited ? '/images/favourited.svg' : '/images/favourite.svg'}
          alt="heart"
        />
        <img className={styles.cardImg} src={props.imageUrl} alt="sneakers" />
      </div>
      <p className="cardTitle">{props.title}</p>
      <div className={styles.cardPrice}>
        <div className={styles.priceWrapper}>
          <p>Цена:</p>
          <b>{props.price}</b>
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
