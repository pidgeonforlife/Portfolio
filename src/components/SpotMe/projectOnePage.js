import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './projectOnePage.css';

function ProjectOne() {

  return (
    <div className='projectOneContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>SpotMe<span style={{color: '#94CBFF'}}>.</span></h1>
        </motion.div>
        <div className='projectOneImageContainer'>
            <div className='projectOne'>
              <img src='/images/SpotMe.png' />
            </div>
        </div>
    </div>
  );
}

export default ProjectOne;