import React, { useState } from 'react';
import { motion} from 'framer-motion';

function DiversifyObjectives() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Objectives<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>You can sign up on the app and connect with employers directly or search the job board
                 and get tailored results based on your location and job query..</p>
        </motion.div>
    </div>
  );
}

export default DiversifyObjectives;