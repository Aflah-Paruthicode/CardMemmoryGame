interface HighScoreInterface {
  bestMoves: number;
  bestTime: string;
}

interface TimerInterface {
  timeInString: string;
  min: number;
  second: number;
}

export const useNewHighScore = (setNewHighScore: React.Dispatch<React.SetStateAction<HighScoreInterface | null>>, moves: number, timer: TimerInterface) : boolean => {

  const bestScore: string | null = localStorage.getItem("highScore");
  let isNewHighScore : boolean = false;

  if (!bestScore) {
    setNewHighScore({ bestMoves: moves, bestTime: timer.timeInString });
    localStorage.setItem("highScore", JSON.stringify({ bestMoves: moves, bestTime: timer.timeInString }));
    isNewHighScore = true;
  } else {
    let timeArr = JSON.parse(bestScore).bestTime.split(":").map(Number);
    let bestMoveWas = JSON.parse(bestScore).bestMoves;
    
    if (timeArr[0] >= timer.min && timeArr[1] >= timer.second && bestMoveWas >= moves) {
      setNewHighScore({ bestMoves: moves, bestTime: timer.timeInString });
      localStorage.setItem("highScore", JSON.stringify({ bestMoves: moves, bestTime: timer.timeInString }));
      isNewHighScore = true;
    }
  }
  return isNewHighScore;
};
