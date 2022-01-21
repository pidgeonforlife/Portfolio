import React, { useState } from 'react';
import { motion} from 'framer-motion';

function HandyInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Handy is a project that was developed to create a platform for employers and people seeking for jobs process easier. With the themes of Craigslist and Fiver combined, Handy was born.</p>
        </motion.div>
    </div>
  );
}

export default HandyInfo;