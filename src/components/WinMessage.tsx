
import { useEffect } from "react";

interface TimerInterface {
  timeInString : string,
  min : number,
  second : number
}

const WinMessage = ({ moves,timer,notify }: { moves: number, timer : TimerInterface ,notify : () => {} }) => {

  useEffect(() => {
    notify()
  },[])
  return (
    <div className="win-message">  
      <p className="notify">You completed the game in : {moves} moves and with : {timer.min > 0 ? `${timer.min} Minutes` : `${timer.second} Seconds`} !</p>
    </div>
  );
};

export default WinMessage;
