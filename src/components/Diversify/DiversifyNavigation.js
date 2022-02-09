import React, { useState } from 'react';
import { motion} from 'framer-motion';

function DiversifyNavigate() {

    return (
        <div className='buttonContainer'>
            <div className='leftButton'>
                <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }} className='navigateButton'>
                    <i className="fas fa-arrow-left"></i>
                    <a href='/MapleStory'>PREVIOUS PROJECT</a>
                </motion.button>
            </div>
            <div className='rightButton'>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='navigateButton'>
                    <a href='/SpotMe'>NEXT PROJECT</a>
                    <i className="fas fa-arrow-right"></i>
                </motion.button>
            </div>
        </div>
      );
    }

export default DiversifyNavigate;