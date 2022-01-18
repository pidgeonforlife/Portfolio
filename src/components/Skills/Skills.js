import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './Skills.css';

function Skills() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Skills/Tools<span style={{color: '#94CBFF'}}>.</span></h1>
        </motion.div>
    </div>
  );
}

export default Skills;