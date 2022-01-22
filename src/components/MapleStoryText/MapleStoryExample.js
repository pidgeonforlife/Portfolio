import React, { useState } from 'react';
import { motion} from 'framer-motion';

function MapleStoryExample() {

  return (
    <div className='aboutContainer' id='container'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo' id='projectWireframe'>
            <h1>Flowchart<span style={{color: '#94CBFF'}}>.</span></h1>
            <img src='/images/FlowChart.png' />
        </motion.div>
    </div>
  );
}

export default MapleStoryExample;