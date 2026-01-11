import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

const cardValues: string[] = ["🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒", "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒"];

interface CardsInterface {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function App() {
  const [cards, setCards] = useState<CardsInterface[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<CardsInterface[]>([]);

  const initializeGame = () => {
    const finalCards: CardsInterface[] = cardValues.map((value, index) => ({
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

    const newCards: CardsInterface[] = cards.map((c) => {
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
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setCards((prev) => 
            prev.map((c) => {
              if (c.id == card.id || c.id == firstCard.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            })
          );
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const flippedBackCard: CardsInterface[] = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id == card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });

          setCards(flippedBackCard);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid">{cards && cards.map((card) => <Card card={card} onClick={handleCardClick} />)} </div>
    </div>
  );
}

export default App;
