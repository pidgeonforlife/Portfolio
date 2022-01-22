import React, { useState } from 'react';
import { motion} from 'framer-motion';

function MapleStoryInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>MapleStory-Text is a text-based game that followed the main themes of a popular MMORPG called Maplestory. With five classes to choose from, players will have to
              train and level up to defeat the boss; ultimately defeating the game. </p>
            <p>Written in Python 3, this game was designed with numerous amount of doc-testing, documentation, constants, and functions that are dynamic.</p>
        </motion.div>
    </div>
  );
}

export default MapleStoryInfo;