import React from 'react'

const Play = () => {
    const audio = new Audio('./Beep.mp3');
    function audioPlay (e) {
        e.preventDefault();
        audio.play();
    }
  return (
    <div>
      <button onClick={audioPlay} >play</button>
    </div>
  )
}

export default Play
