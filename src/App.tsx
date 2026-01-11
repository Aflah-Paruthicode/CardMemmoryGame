import "./App.css";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues: string[] = ["🍎", "🍉", "🍍", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒", "🍎", "🍉","🍍", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒"];

function App() {
  const { cards, handleCardClick, initializeGame, isGameComplete, moves, score } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} reInitializeGame={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">{cards && cards.map((card, ind) => <Card key={ind} card={card} onClick={handleCardClick} />)} </div>
    </div>
  );
}

export default App;
