import React, { useState } from 'react';
import { motion} from 'framer-motion';

function HandyInfo() {

  return (
    <div className='aboutContainer'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Information<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Handy is a project that was developed to create a platform for employers and 
              people seeking for jobs process easier. Furthermore, Handy is a freelance work application directed towards people/businesses searching for employment/staff 
              under various conditions. The application helps put people in touch with the jobs that they are seeking and allows them to customize their search criteria 
              to find the optimal solution to their needs.</p>
            <p>With the themes of Craigslist and Fiver combined, Handy was born.</p>
        </motion.div>
    </div>
  );
}

export default HandyInfo;