import React, { useState } from 'react';
import { motion} from 'framer-motion';

function SpotMeRole() {

  return (
    <div className='aboutContainer' id='containerHelp'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Roles<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Full Stack Developer</p>
            <p>Scrum Master</p>
            <p>Lead Designer</p>
            <p>Project Manager</p>
            <p>Product Owner</p>
        </motion.div>
    </div>
  );
}

export default SpotMeRole;