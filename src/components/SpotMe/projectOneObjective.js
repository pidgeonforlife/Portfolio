import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectOneObjective() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Objectives<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Building a memorable brand that reflects individuals from being able to connect with others in 
                a safe environment via phone during the pandemic.</p>
        </motion.div>
    </div>
  );
}

export default ProjectOneObjective;