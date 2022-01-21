import React, { useState } from 'react';
import { motion} from 'framer-motion';

function SYPTechObjectives() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Objectives<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Building a memorable company website that reflects web development for small businesses. . </p>
        </motion.div>
    </div>
  );
}

export default SYPTechObjectives;