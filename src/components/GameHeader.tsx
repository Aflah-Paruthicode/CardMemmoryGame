interface GameHedeaderProps {
  score: number;
  moves: number;
}

const GameHeader = (props: GameHedeaderProps) => {
  return (
    <div className="game-header">
      <h1>Memmory card game</h1>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Score:</span>{" "}
          <span className="stat-value">{props.score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span>{" "}
          <span className="stat-value">{props.moves}</span>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
