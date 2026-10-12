import React from 'react';
import UseAnimations from 'react-useanimations';
import scrollDown from 'react-useanimations/lib/scrollDown';

const ScrollDown = () => {
  return (
    <div className="scroll-button">
      <UseAnimations animation={scrollDown} size={40} strokeColor="#ffffff" />
    </div>
  )
}

export default ScrollDown;
