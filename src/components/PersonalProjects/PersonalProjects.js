import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './PersonalProjects.css';

function PersonalProjects() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Projects<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Take a look at some of my personal projects over the years by clicking on it!</p>
        </motion.div>
        <div className='projectShowCase'>
            <div className='projectBox1'></div>
            <div className='projectBox2'></div>
            <div className='projectBox3'></div>
        </div>
    </div>
  );
}

export default PersonalProjects;