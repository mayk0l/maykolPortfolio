import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'; 
import './Work.scss';

const Work = () => {

  const [ActiveFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [trabajos, setTrabajos] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "trabajos"]';

    client.fetch(query)
      .then((data) => {
        setTrabajos(data);
        setFilterWork(data);
      })
  }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if(item === 'Todas') {
        setFilterWork(trabajos);
      } else {
        setFilterWork(trabajos.filter((trabajo) => trabajo.tags.includes(item)))
      }
    }, 500);
  }
  return (
    <>
      <h2 className="head-text">Mi sección de<span> portafolio </span></h2>
      <div className="app__work-filter">
        {['FrontEnd', 'BackEnd', 'Mobile App', 'Todas' ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text $(activeFilter === item ? 'item-active' : '')`}
          >
            {item}
          </div>          
        ))}
      </div>
      
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildre: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((trabajo, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(trabajo.imgUrl)} alt={trabajo.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={trabajo.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={trabajo.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{trabajo.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{trabajo.description}</p>
            
              <div className="app__work-tag app__flex">
                <p className="p-text">{trabajo.tags[0]}</p>
              </div>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'trabajos',
  "app__primarybg"
);