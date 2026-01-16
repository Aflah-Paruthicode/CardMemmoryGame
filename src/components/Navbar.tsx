
interface HighScoreInterface {
  bestMoves: number;
  bestTime: string;
}

const Navbar = ({HighScore}: {HighScore : HighScoreInterface | null}) => {
  return (
    <nav id="navbar">
      <div>
        <img className="logo" src="https://ladyluckgames.io/wp-content/uploads/2022/01/fruits_thumbnail_1000x1000-min-1.jpg" alt="" />
      </div>
      <div className="highScore">
        <h2>Best Score : </h2>
        <div className="stat-item highScore-moves">
          <span className="stat-label">Moves:</span> <span className="stat-value">{`${HighScore?.bestMoves ? HighScore.bestMoves : 0}`}</span>
        </div> 
        <div className="stat-item highScore-time">
          <span className="stat-label">Time:</span> <span className="stat-value">{`${HighScore?.bestTime ? HighScore.bestTime : "--:--"}`}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
