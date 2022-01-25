import React, { useState } from 'react';
import { motion} from 'framer-motion';
import Accordions from './Accordion';
import './Skills.css';

function Skills() {

  return (
    <div className='skillsContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='skillsInfo'>
            <h1>Skills/Tools<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Here are some of the things I've learned<span style={{color: '#94CBFF'}}>.</span></p>
        </motion.div>
        <div className='skillsList'>
          <Accordions />
        </div>
    </div>
  );
}

export default Skills;


            {/* <button>HTML5</button>
            <button>JavaScript</button>
            <button>CSS3</button>
            <button>Vue.js</button>
            <button>React</button>
            <button>Python</button>
            <button>Java</button>
            <button>Github</button>
            <button>Git</button>
            <button>Firebase</button> */}