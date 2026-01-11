import { useEffect, useState } from "react";

interface CardsInterface {
  id: number;
  value: string | number;
  isFlipped: boolean;
  isMatched: boolean;
}

export const useGameLogic = (cardValues: string[]) => {
  const [cards, setCards] = useState<CardsInterface[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [isLocked, setLocked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  const shuffleArr = (arr: string[]): string[] => {
    const shuffled: string[] = [...arr];

    for (let i: number = shuffled.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    const shuffled = shuffleArr(cardValues);
    const finalCards: CardsInterface[] = shuffled.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);

    setMoves(0);
    setScore(0);
    setLocked(false);
    setMatchedCards([]);
    setFlippedCards([]);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card: CardsInterface) => {
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length == 2) return;

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
          setScore((prev) => prev + 1);
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
          setLocked(false);
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
          setLocked(false);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  };

  const isGameComplete = matchedCards.length == cardValues.length;

  return {
    cards,
    score,
    moves,
    isGameComplete,
    initializeGame,
    handleCardClick,
  };
};
