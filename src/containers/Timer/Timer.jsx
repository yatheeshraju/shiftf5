import React, { useEffect, useState } from "react";
import ding from "./ding.mp3"

function Timer() {
  const [selectedTime,setselectedTime]=useState(5)
  const [disableInput,setDisableInput]=useState(false);
  const [time,setTime]=useState();
  useEffect(()=>{
    document.title="🍅  Pomodoro - Focus Timer "
  })
  var audio = new Audio(ding);
  audio.loop=false;

  const startTimer=(duration) =>{
    
    setDisableInput(true)
    var timer = duration, minutes, seconds;
    setInterval(function timerFun () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        setTime(minutes + ":" + seconds);
       
        if (--timer < 0) {
           timer = 0;
           duration=0
           audio.play();
           document.title=`🍅 - 00:00 - Stop`
           
        }
    }, 1000);
}


  return (
    <div className="p-4">
      <div className="w-full flex flex-col items-center mt-4 p-2">
        <div className="text-9xl mb-8 countdown h-[150px]">{disableInput?time:selectedTime }</div>
         <div className="flex gap-2 text-xl ">5<input disabled={disableInput} className="w-[300px]" type="range" min={1} max={20} defaultValue={5} onChange={(e)=>setselectedTime(e.target.value)} /> 20</div>
         <div>minutes</div>
         <button className="bg-black w-[350px] h-[50px] mt-8 font-bold text-xl text-white hover:bg-gray-800 disabled:bg-gray-400" onClick={()=>disableInput?window.location.reload():startTimer(selectedTime*60)}> {disableInput?"Stop": "Start"}</button>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Timer;
