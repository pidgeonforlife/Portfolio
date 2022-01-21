import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectOneDeliverables() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Deliverables<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Brand Identity</p>
            <p>Website</p>
            <p>Matching Algorithm</p>
            <p>Data Storage</p>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='aboutButton1'>
            <a href='https://group11-spot-me.web.app/'>LIVE VIEW</a></motion.button>
        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }} className='aboutButton2'>
          <a href='https://github.com/alsash110/COMP-2800-Team-DTC-11-SpotMe'>SOURCE</a></motion.button>
        </motion.div>
    </div>
  );
}

export default ProjectOneDeliverables;