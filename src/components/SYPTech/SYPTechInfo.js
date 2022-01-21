import React, { useState } from 'react';
import { motion} from 'framer-motion';

function SYPTechInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>With a team of 5 developers, we started a company called SYPTech. Our main focus on the company was to create web solutions for small businesses based in Vancouver, Canada.</p>
        </motion.div>
    </div>
  );
}

export default SYPTechInfo;