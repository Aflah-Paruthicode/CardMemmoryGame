import "./App.css";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";
import { formatTime } from "./hooks/useTimeFormat";
import toast,{Toaster} from "react-hot-toast";

interface TimerInterface {
  timeInString : string,
  min : number,
  second : number
}

const cardValues: string[] = ["🍑", "🍒", "🍑", "🍒"];
const notify = () => toast("Congratulations!");

function App() {
  const { cards, handleCardClick, initializeGame, isGameComplete, moves, score, time } = useGameLogic(cardValues);

  let timer : TimerInterface = formatTime(time);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} reInitializeGame={initializeGame} timer={timer} />
      {isGameComplete && (
        <div>
          <Toaster />
          <WinMessage moves={moves} timer={timer} notify={notify} />
        </div>
      )}
      <div className="cards-grid">{cards && cards.map((card, ind) => <Card key={ind} card={card} onClick={handleCardClick} />)} </div>
    </div>
  );
}

export default App;
