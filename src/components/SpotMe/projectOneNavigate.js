import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './projectOneNavigate.css';

function ProjectOneNavigate() {

  return (
    <div className='projectOneNavigate'>
        <div className='leftButton'>
            <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }} className='navigateButton2'>
                <i class="fas fa-arrow-left"></i>
                <h2>Previous Project</h2>
            </motion.button>
        </div>
        <div className='rightButton'>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='navigateButton1'>
                <i class="fas fa-arrow-right"></i>
                <h2>Next Project</h2>
            </motion.button>
        </div>
    </div>
  );
}

export default ProjectOneNavigate;