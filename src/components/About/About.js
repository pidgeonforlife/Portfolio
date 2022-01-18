import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './About.css';

function About() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>About<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>I am currently a university student who is passionate in developing creative 
                solutions for web development. Other than programming, I enjoy my time playing 
                Dota 2 or watching Netflix.</p>
            <p>Interested in working with me or taking a better look?</p>
                <motion.button whileHover={{ 
                  scale: 1.1
                  }} whileTap={{ scale: 0.8 }} className='aboutButton1'>RESUME</motion.button>
                <motion.button whileHover={{ 
                  scale: 1.1
                  }} whileTap={{ scale: 0.8 }} className='aboutButton2'>CONTACT</motion.button>
        </motion.div>
    </div>
  );
}

export default About;
