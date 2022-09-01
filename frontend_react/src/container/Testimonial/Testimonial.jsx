import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'; 
import './Testimonial.scss';

const Testimonial = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonios"]';

    client.fetch(query)
      .then((data) => {
        setTestimonios(data);
      })

  }, [])

  const testeo = testimonios[currentIndex];

  return (
    <>
      {testimonios.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testeo.imgurl)} alt="testimonial"/>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonios[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testeo.name}</h4>
                <h5 className="p-text">{testeo.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonios.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />    
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonios.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />    
            </div>
          </div>
        </>
      )}

      
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonios',
  "app__primarybg"
);