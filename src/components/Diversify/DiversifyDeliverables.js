import React, { useState } from 'react';
import { motion} from 'framer-motion';

function DiversifyDeliverables() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Deliverables<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Mobile Web Application</p>
            <p>Machine Learning Recommendation Feature</p>
            <p>Data Storage</p>
            <p>User Login/Register Authentication</p>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='aboutButton1'>
            <a href='https://devpost.com/software/diversify-vf8lm9'>DEVPOST</a></motion.button>
        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }} className='aboutButton2'>
          <a href='https://github.com/pidgeonforlife/Diversify'>SOURCE</a></motion.button>
        </motion.div>
    </div>
  );
}

export default DiversifyDeliverables;