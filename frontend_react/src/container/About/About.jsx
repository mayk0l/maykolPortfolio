import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [acercas, setAcercas] = useState([]);

  useEffect(() => {
    const query = '*[_type == "acercas"]';

    client.fetch(query)
      .then((data) => setAcercas(data))
  }, []);

  return (
    <>
      <h2 className="head-text">¿Necesitas una <span> transformación digital</span>?<br/> Yo puedo <span>ayudarte </span>con eso.</h2>

      <div className="app__profiles">
        {acercas.map((acerca, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={acerca.title + index}
          >
            <img src={urlFor(acerca.imgUrl)} alt={acerca.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{acerca.title}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{acerca.description}</p>
          </motion.div>
        ))}
      </div> 
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'acerca',
  "app__whitebg"
);