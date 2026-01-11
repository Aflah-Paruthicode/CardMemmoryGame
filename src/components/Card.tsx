interface CardsInterface {
  id: number;
  value: string | number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface CardInterface {
  card: CardsInterface;
  onClick: (card: CardsInterface) => void;
}

const Card = ({ card, onClick }: CardInterface) => {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`} onClick={() => onClick(card)}>
      <div className="card-front"> ? </div>
      <div className="card-back"> {card.value} </div>
    </div>
  );
};

export default Card;
