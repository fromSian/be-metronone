"use client";
import React, { useCallback, useRef, useState } from "react";

/**
 *
 *
 */

const Easy = () => {
  const [bpm, setBpm] = useState(120);
  const [loop, setLoop] = useState(4);
  const [count, setCount] = useState(undefined);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const audioBeginRef = useRef(
    new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav")
  );
  const audioRef = useRef(
    new Audio("https://daveceddia.com/freebies/react-metronome/click2.wav")
  );

  const play = () => {
    setCount((prevCount) => {
      if (prevCount) {
        audioRef.current.play();
      } else {
        audioBeginRef.current.play();
      }
      return !prevCount || prevCount > 3 ? 1 : prevCount + 1;
    });
  };

  const handleStart = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    play();
    timerRef.current = setInterval(play, (60 / bpm) * 1000);
  };

  const handlePause = () => {
    audioBeginRef.current.pause();
    audioRef.current.pause();
    audioBeginRef.current.currentTime = 0;
    audioRef.current.currentTime = 0;
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
  return (
    <div>
      <div>BPM: {bpm}</div>
      <div>Loop: {loop}</div>
      <div>Count: {count}</div>
      <div className="flex">
        <button onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
      </div>
      <div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div className={count === i + 1 ? "text-red-500" : "text-red-50"}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Easy;
