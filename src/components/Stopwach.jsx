import React, { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalId = useRef(null);
  const startTime = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime.current);
      }, 10);
    } else {
      clearInterval(intervalId.current);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTime.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 100) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className='stopwatch'>
      <div className='display'>
        <h2>{formatTime()}</h2>
        <div className='control'>
          <button className='start' onClick={start}>Start</button>
          <button className='stop' onClick={stop}>Stop</button>
          <button className='reset' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
