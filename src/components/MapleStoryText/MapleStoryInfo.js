import React, { useState } from 'react';
import { motion} from 'framer-motion';

function MapleStoryInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>MapleStory-Text is a text-based game that followed the main themes of a popular MMORPG called Maplestory.</p>
        </motion.div>
    </div>
  );
}

export default MapleStoryInfo;