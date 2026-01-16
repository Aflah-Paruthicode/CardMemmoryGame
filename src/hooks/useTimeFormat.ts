
interface TimerInterface {
  timeInString : string,
  min : number,
  second : number
}

export const formatTime = (seconds: number) : TimerInterface => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return {
    timeInString : `${mins} : ${secs.toString().padStart(2, "0")}`,
    min : mins,
    second : seconds
  }
};