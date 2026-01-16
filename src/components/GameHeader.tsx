interface TimerInterface {
  timeInString: string;
  min: number;
  second: number;
}

interface GameHedeaderProps {
  score: number;
  moves: number;
  timer: TimerInterface;
  reInitializeGame: () => void;
}

const GameHeader = ({ score, moves, reInitializeGame, timer }: GameHedeaderProps) => {
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
          <span className="stat-label">Timer:</span> <span className="stat-value">{timer.timeInString ? timer.timeInString : "--:--"}</span>
        </div>
      </div>
      <button className="reset-btn" onClick={reInitializeGame}>
        New game{" "}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
        </svg>
      </button>
    </div>
  );
};

export default GameHeader;
