import React, { useState } from 'react';
import { motion} from 'framer-motion';

function ProjectOneNavigate() {

  return (
    <div className='buttonContainer'>
        <div className='leftButton'>
        </div>
        <div className='rightButton'>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='navigateButton'>
                <a href='/Handy'>NEXT PROJECT</a>
                <i class="fas fa-arrow-right"></i>
            </motion.button>
        </div>
    </div>
  );
}

export default ProjectOneNavigate;