import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectTwo() {

  return (
    <div className='projectTwoContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='projectOneInfo'>
            <h1>Handy<span style={{color: '#94CBFF'}}>.</span></h1>
        </motion.div>
        <div className='projectTwoImageContainer'>
            <div className='projectTwo'>
              <img src='/images/Handy.png' />
            </div>
        </div>
    </div>
  );
}

export default ProjectTwo;