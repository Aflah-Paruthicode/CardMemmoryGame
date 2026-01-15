import { formatTime } from '../hooks/useTimeFormat';

interface GameHedeaderProps {
  score: number;
  moves: number;
  timer : string;
  reInitializeGame: () => void;
}

const GameHeader = (props: GameHedeaderProps) => {

  return (
    <div className="game-header"> 
      {/* <h1>Card game</h1> <p>Best Time: {bestTime ? formatTime(bestTime) : "--:--"}</p> */}
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Score:</span> <span className="stat-value">{props.score}</span>  
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span> <span className="stat-value">{props.moves}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Timer:</span> <span className="stat-value">{ props.timer ? props.timer : "--:--"}</span>
        </div>
      </div>
      <button className="reset-btn" onClick={props.reInitializeGame}>
        New game
      </button>
    </div>
  );
};

export default GameHeader;
