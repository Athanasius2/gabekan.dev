import React,{Component} from 'react';
import {useRef} from 'react';
import {useState} from 'react';

//export class WpmTextbox extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      textInput: "",
//      startTime: 0,
//      pauseTime: 0,
//      isPaused: false,
//      cpm: 0,
//      wpm: 0,
//    };
//  }

export default function WpmTextbox() {
  const ref = useRef(null);

  const [textInput, setTextInput] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);

  const change = (event) => {
    if (!isPaused)
    {
      setTextInput(event.target.value);
      let newTime = new Date().getTime(); 
      let timeElapsed = 0;
      let newCpm = 0;
      let newWpm = 0;
      if (startTime == 0)
        setStartTime(newTime);
      else {
        timeElapsed = (newTime - startTime) / 60000;
        newCpm = textInput.length / timeElapsed;
        newWpm = newCpm / 5;
      }

      setCpm(Math.round(newCpm));
      setWpm(Math.round(newWpm));
    }
  };

  const reset = () => {
    setTextInput("");
    setStartTime(0);
    setCpm(0);
    setWpm(0);
  };

  const pause = () => {
    if (isPaused == false) {
      setPauseTime(new Date().getTime());
      setIsPaused(true);
    }
    else {
      let resumeTime = new Date().getTime();
      let elapsedTime = resumeTime - pauseTime;
      let newStartTime = startTime + elapsedTime;
      setStartTime(newStartTime);
      setIsPaused(false);
    }

    ref.current.focus();
  };

  return(
    <>
    <label for="textbox">WPM: {wpm}, CPM: {cpm}</label>
    <button onClick={reset}>reset</button>
    <button onClick={pause}>pause</button>
    <textarea 
    autoFocus 
    rows="20" 
    cols="100" 
    id="textbox"
    ref={ref}
    onChange={change} 
    value={textInput}
    />
    </>
  )
}
//}
