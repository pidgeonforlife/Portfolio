import React, { useState } from 'react';
import { motion} from 'framer-motion';

function MapleStoryObjectives() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Objectives<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Developing a text-based games with five different classes to choose from, giving the user an opportunity to have an immersive adventure. 
              Creating an adventurous map with four regions seperated, players can use their imaginations with what the scenery is told.
            </p>
        </motion.div>
    </div>
  );
}

export default MapleStoryObjectives;