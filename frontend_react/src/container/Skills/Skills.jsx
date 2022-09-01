import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'; 
import './Skills.scss';

const Skills = () => {
  const [experiencia, setExperiencia] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "experiencias"]';
    const habilidadesQuery = '*[_type == "habilidades"]';

    client.fetch(query)
      .then((data) => {
        console.log(data)
        setExperiencia(data);
      })
    
    client.fetch(habilidadesQuery)
    .then((data) => {
      setHabilidades(data);
    })
  }, [])
  
  return (
    <>
      <h2 className="head-text">Habilidades y Experiencia</h2>
    
    
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {habilidades?.map((habilidad) => (
            <motion.div 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={habilidad.name}
          >
            <div className="app__flex" style={{ backgroundColor: habilidad.bgColor }}>
              <img src={urlFor(habilidad.icon)} alt={habilidad.name}/>
            </div>
            <p className="p-text">{habilidad.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="app__skills-exp">
          {experiencia?.map((experiencia) => (
            <motion.div
              className="app__skills-exp-item"
              key={experiencia.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experiencia.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experiencia?.works?.map((trabajo) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={trabajo.name}
                      key={trabajo.name}
                    >
                      <h4 className="bold-text">{trabajo.name}</h4>
                      <p className="p-text">{trabajo.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={trabajo.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {trabajo.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
              
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'habilidades',
  "app__whitebg"
);