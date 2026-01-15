const WinMessage = ({ moves,timer }: { moves: number, timer : string }) => {
  return (
    <div className="win-message">
      <h2>Congratulations!</h2>
      <p>You completed the game in : {moves} moves and time with : {timer} !</p>
    </div>
  );
};

export default WinMessage;
