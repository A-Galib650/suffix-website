import React from 'react';
import '../../assets/css/app.css';

const Circle = ({ title, showBars = true }) => {
  return (
    <div className='d-flex gap-2 align-items-start fs-4'>
      <div className='d-flex flex-column align-items-center'>
        <div className='iems-circle'></div>
        {showBars && <div className='bars'></div>}
      </div>
      <p >{title}</p>
    </div>
  );
};

export default Circle;
