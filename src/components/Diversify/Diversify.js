import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectFive() {

  return (
    <div className='projectOneContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='projectOneInfo'>
            <h1>Diversify<span style={{color: '#94CBFF'}}>.</span></h1>
        </motion.div>
        <div className='projectOneImageContainer'>
            <div className='projectOne'>
              <img src='/images/Diversify.png' />
            </div>
        </div>
    </div>
  );
}

export default ProjectFive;