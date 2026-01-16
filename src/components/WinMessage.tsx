
import { useEffect } from "react";
import { useNewHighScore } from "../hooks/useNewHighScore";

interface HighScoreInterface {
  bestMoves: number;
  bestTime: string;
}

interface TimerInterface {
  timeInString : string,
  min : number,
  second : number,
}

const WinMessage = ({ moves,timer,notify,setNewHighScore,highScoreNotify }: { moves: number, timer : TimerInterface ,notify : () => {},highScoreNotify : () => {} ,setNewHighScore : React.Dispatch<React.SetStateAction<HighScoreInterface | null>>}) => {

  useEffect(() => {
    let isNewHighscore : boolean = useNewHighScore(setNewHighScore,moves,timer);
    if(isNewHighscore) highScoreNotify();
    notify();
  },[])
  return (
    <div className="win-message">  
      <p className="notify">You completed the game in : {moves} moves and with : {timer.min > 0 ? `${timer.min} Minutes` : `${timer.second} Seconds`} !</p>
    </div>
  );
};

export default WinMessage;
