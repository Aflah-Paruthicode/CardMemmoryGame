import "./App.css";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";
import { formatTime } from "./hooks/useTimeFormat";

const cardValues: string[] = ["🍎", "🍉", "🍍", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒", "🍎", "🍉", "🍍", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒"];

function App() {
  const { cards, handleCardClick, initializeGame, isGameComplete, moves, score,time } = useGameLogic(cardValues);

  let timer = formatTime(time)

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} reInitializeGame={initializeGame} timer={timer} />
      {isGameComplete && <WinMessage moves={moves} timer={timer} />}
      <div className="cards-grid">{cards && cards.map((card, ind) => <Card key={ind} card={card} onClick={handleCardClick} />)} </div>
    </div> 
  );
}

export default App;
