function Card() {
  return (
    <div className="card">
      <div className="cardImage">
        <img className="favourited" src="/images/favourited.svg" alt="heart" />
        <img className="cardImg" src="/images/image 5.jpg" alt="sneakers" />
      </div>
      <p className="cardTitle">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="cardPrice">
        <div className="priceWrapper">
          <p>Цена:</p>
          <b>1 763 руб.</b>
        </div>
        <img src="/images/buttonImage.svg" alt="select" />
      </div>
    </div>
  );
}

export default Card;
