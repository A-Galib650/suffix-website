// import React from 'react'

// const ImageBox = ({src,name}) => {
//   return (
// <>
//        <div className='d-flex flex-column blockAnimation'>
//             <div className='d-flex justify-content-around align-items-center p-2'>
//                  <div className='Imagebox d-flex align-content-center'>
//                      <img className='img-fluid overflow-hidden ' src={src} alt="Loading" />
//                  </div>
//              </div>      
//              <div className='d-flex justify-content-center'>
//                       <p className='fs-3 p-5 fw-bold ' style={{ color: '#0d2c54' }} >{name}</p>
//              </div>
//          </div>
// </>
//   )
// }

// export default ImageBox

import React, { useEffect, useRef } from 'react';
import '../../assets/css/app.css'; // Import your CSS file

const ImageBox = ({ src, name }) => {
  const blockRef = useRef(null);

  useEffect(() => {
    const block = blockRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          block.classList.add('appear');
        } else {
          block.classList.remove('appear'); // Remove class when out of view to re-trigger animation
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the element is visible
    });

    if (block) {
      observer.observe(block);
    }

    return () => {
      if (block) {
        observer.unobserve(block);
      }
    };
  }, []);

  return (
    <div ref={blockRef} className='d-flex flex-column blockAnimation'>
      <div className='d-flex justify-content-around align-items-center p-2'>
        <div className='Imagebox d-flex align-content-center'>
          <img className='img-fluid overflow-hidden' src={src} alt="Loading" />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='fs-3 p-5 fw-bold' style={{ color: '#0d2c54' }}>{name}</p>
      </div>
    </div>
  );
}

export default ImageBox;
