import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './Intro.css';

function Intro() {

  return (
    <div className='introContainer'>
        <motion.div initial={{ x: -200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='introInfo'>
            <h1>Intro<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Hello there! I'm</p>
            <h2><span style={{color: '#94CBFF'}}>Yongseok</span> Choi</h2>
            <p>A Front-End Web Developer<span style={{color: '#94CBFF'}}>.</span></p>
        </motion.div>
    </div>
  );
}

export default Intro;
