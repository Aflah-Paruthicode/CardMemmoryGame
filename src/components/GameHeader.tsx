
interface TimerInterface {
  timeInString : string,
  min : number,
  second : number
}

interface GameHedeaderProps {
  score: number;
  moves: number;
  timer : TimerInterface;
  reInitializeGame: () => void;
}

const GameHeader = ({score,moves,reInitializeGame,timer}: GameHedeaderProps) => {

  return (
    <div className="game-header"> 
      {/* <h1>Card game</h1> <p>Best Time: {bestTime ? formatTime(bestTime) : "--:--"}</p> */}
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Score:</span> <span className="stat-value">{score}</span>  
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span> <span className="stat-value">{moves}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Timer:</span> <span className="stat-value">{ timer.timeInString ? timer.timeInString : "--:--"}</span>
        </div>
      </div>
      <button className="reset-btn" onClick={reInitializeGame}>
        New game
      </button>
    </div>
  );
};

export default GameHeader;
