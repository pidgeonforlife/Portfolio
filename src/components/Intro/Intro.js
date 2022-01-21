import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './Intro.css';

function Intro() {

  return (
    <div className='introContainer'>
      <div className='intro'>
        <motion.div initial={{ x: -200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='introInfo'>
            <h1>Intro<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Hello there! I'm</p>
            <h2><span style={{color: '#94CBFF'}}>Yongseok</span> Choi</h2>
            <p>A Front-End Web Developer<span style={{color: '#94CBFF'}}>.</span></p>
        </motion.div>
        <motion.div initial={{ x: -200, opacity: 0 }}
            transition={{ delay: 0.4}}
            animate={{ x: 0, opacity: 1 }} className='introImage'>
              <img src='images/intropicture.png' />
        </motion.div>
      </div>
        <motion.div transition={{duration: 2, repeat: Infinity }}
        animate={{ y: [0, 30, 0] }} className='introArrow'>
          <i class="fas fa-arrow-down"></i>
        </motion.div>
    </div>
  );
}

export default Intro;
