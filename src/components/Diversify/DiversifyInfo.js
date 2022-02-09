import React, { useState } from 'react';
import { motion} from 'framer-motion';

function DiversifyInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>According to the Equal Employment Opportunity Commission, only 15.4% of the employees in 
                the tech industry are of minority descent. Of the minorities in the tech industry, 4% of 
                them are women. By giving job searching minorities a platform where they can connect with tech 
                companies directly and search for tech jobs, our app aims to change that!</p>
            <p>Super excited to share that this project has won for the most diverse application for BCHacks2022!</p>
        </motion.div>
    </div>
  );
}

export default DiversifyInfo;