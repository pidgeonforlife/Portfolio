import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectThree() {

  return (
    <div className='projectThreeContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='projectOneInfo'>
            <h1>SYPTech<span style={{color: '#94CBFF'}}>.</span></h1>
        </motion.div>
        <div className='projectThreeImageContainer'>
            <div className='projectTwo'>
              <img src='/images/SYPTech.png' />
            </div>
        </div>
    </div>
  );
}

export default ProjectThree;