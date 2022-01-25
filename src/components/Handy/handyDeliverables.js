import React, { useState } from 'react';
import { motion} from 'framer-motion';

function HandyDeliverables() {

  return (
    <div className='aboutContainer' id='containerHelp'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Deliverables<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Website</p>
            <p>Data Optimization</p>
            <p>Data Storage</p>
            <p>Website Pages</p>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='aboutButton1'>
            <a href='https://handy-2e659.web.app/'>LIVE VIEW</a></motion.button>
        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }} className='aboutButton2'>
          <a href='https://github.com/pidgeonforlife/Handy'>SOURCE</a></motion.button>
        </motion.div>
    </div>
  );
}

export default HandyDeliverables;