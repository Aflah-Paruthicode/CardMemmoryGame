import "./App.css";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import Navbar from "./components/Navbar";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";
import { formatTime } from "./hooks/useTimeFormat";
import toast, { Toaster } from "react-hot-toast";

interface TimerInterface {
  timeInString: string;
  min: number;
  second: number;
}

const cardValues: string[] = ["🍑", "🍒", "🍑", "🍒"];
const gameFinishedNotify = () => toast("Congratulations!", { icon: "👏", style: { borderRadius: "10px", background: "#0a0a0a", color: "#fff" } });
const newHighScoreNotify = () => toast("New High Score!!!", { icon: "🥳🎉", style: { borderRadius: "10px", background: "#0a0a0a", color: "#fff" } });

function App() {
  const { cards, handleCardClick, initializeGame, isGameComplete, moves, score, time, setIsHighScore, isHighScore } = useGameLogic(cardValues);

  let timer: TimerInterface = formatTime(time);

  return (
    <div>
      <Navbar HighScore={isHighScore} />
      <div className="app">
        <GameHeader score={score} moves={moves} reInitializeGame={initializeGame} timer={timer} />
        {isGameComplete && (
          <div>
            <Toaster />
            <WinMessage moves={moves} timer={timer} notify={gameFinishedNotify} highScoreNotify={newHighScoreNotify} setNewHighScore={setIsHighScore} />
          </div>
        )}
        <div className="cards-grid">{cards && cards.map((card, ind) => <Card key={ind} card={card} onClick={handleCardClick} />)} </div>
      </div>
    </div>
  );
}

export default App;
