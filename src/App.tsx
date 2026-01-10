import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

const cardValues: string[] = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

interface CardsInterface {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function App() {
  const [cards, setCards] = useState<CardsInterface[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const initializeGame = () => {
    const finalCards : CardsInterface[] = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    console.log(finalCards);
    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card: object) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards : CardsInterface[] = cards.map((c) => {
      if (card.id == c.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length == 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value == card.value) {
        alert("Matched!!!");
      } else {
        const flippedBackCard : CardsInterface[] = newCards.map((c) => {
          if (newFlippedCards.includes(c.id || c.id == card.id)) {
            return { ...c, isFlipped: false };
          } else {
            return c;
          }
        });

        setCards(flippedBackCard)
      }
    }
  };

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}{" "}
      </div>
    </div>
  );
}

export default App;
