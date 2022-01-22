import React, { useState } from 'react';
import { motion} from 'framer-motion';

function SYPTechExample() {

  return (
    <div className='aboutContainer' id='container'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo' id='projectWireframe'>
            <h1>Wireframes<span style={{color: '#94CBFF'}}>.</span></h1>
            <img src='/images/SYPTechWireframe.png' />
        </motion.div>
    </div>
  );
}

export default SYPTechExample;