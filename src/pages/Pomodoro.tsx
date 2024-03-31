import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ding from '../assets/ding.mp3';

export interface PomodoroProps {}

export default function Pomodoro(props: PomodoroProps) {
  const [inputTime, setInputTime] = useState(0);
  const [disableInput, setDisableInput] = useState(false);
  const [time, setTime] = useState(0);
  var audio = new Audio(ding);
  audio.loop = false;
  const startTimer = (duration): Number => {
    setDisableInput(true);
    var timer = duration,
      minutes,
      seconds;
    setInterval(function timerFun() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      setTime(minutes + ':' + seconds);

      if (--timer < 0) {
        timer = 0;
        duration = 0;
        audio.play();
      }
    }, 1000);
  };
  return (
    <div className="flex items-center w-full justify-center mt-8 fira-code-semibold">
      <Helmet>
        <title>{`${time} ~ Pomodoro Timer`} </title>
      </Helmet>
      <span className="w-60 flex gap-4 flex-col items-center">
        <span className="text-8xl ">{disableInput ? time : inputTime}</span>
        <Slider
          disabled={disableInput}
          defaultValue={[5]}
          max={25}
          step={5}
          value={[inputTime]}
          onValueChange={(num) => setInputTime([num])}
        />
        <Button
          className="rounded-none"
          onClick={() =>
            disableInput ? window.location.reload() : startTimer(inputTime * 60)
          }
        >
          {disableInput ? 'Stop' : 'Start'}
        </Button>
      </span>
    </div>
  );
}
