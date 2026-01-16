import { useEffect, useState } from "react";
import { useSound } from "./useSound";

interface CardsInterface {
  id: number;
  value: string | number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface HighScoreInterface {
  bestMoves: number;
  bestTime: string;
}

export const useGameLogic = (cardValues: string[]) => {
  const [cards, setCards] = useState<CardsInterface[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [isLocked, setLocked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isHighScore, setIsHighScore] = useState<HighScoreInterface | null>(null);

  const playFlip = useSound("/sounds/flipped.mp3");
  const playWrong = useSound('/sounds/wrong.mp3');
  const playWon = useSound('/sounds/won.mp3');
  const playMatched = useSound('/sounds/matched.mp3');

  const shuffleArr = (arr: string[]): string[] => {
    for (let i: number = arr.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    initializeGame();

    const isStored: string | null = localStorage.getItem("highScore");
    if (isStored) setIsHighScore(JSON.parse(isStored));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    if (!isRunning) {
      clearInterval(interval);
      return;
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleCardClick = (card: CardsInterface) => {
    if (!isRunning) setIsRunning(true);
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length == 2) return;
    
    playFlip();
    const newCards: CardsInterface[] = cards.map((c) => {
      if (card.id == c.id) return { ...c, isFlipped: true };
      else return c;
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length == 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value == card.value) {
        playMatched();
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);
          setCards((prev) =>
            prev.map((c) => {
              if (c.id == card.id || c.id == firstCard.id) return { ...c, isMatched: true };
              else return c;
            })
          );
          setFlippedCards([]);
          setLocked(false);
        }, 500);
      } else {
        playWrong();
        setTimeout(() => {
          const flippedBackCard: CardsInterface[] = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id == card.id) return { ...c, isFlipped: false };
            else return c;
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
  useEffect(() => {
    if (isGameComplete) {
      setIsRunning(false);
      playWon();
    }
  }, [cardValues.length, matchedCards.length]);
  console.log("hai");

  return {
    cards,
    score,
    moves,
    isGameComplete,
    initializeGame,
    handleCardClick,
    time,
    setIsHighScore,
    isHighScore,
  };
};
