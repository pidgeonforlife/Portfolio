import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectFour() {

  return (
    <div className='projectThreeContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='projectOneInfo'>
            <h1>MapleStory-Text<span style={{color: '#94CBFF'}}>.</span></h1>
        </motion.div>
        <div className='projectFourImageContainer'>
            <div className='projectTwo'>
              <img src='/images/Maplestory.png' />
            </div>
        </div>
    </div>
  );
}

export default ProjectFour;