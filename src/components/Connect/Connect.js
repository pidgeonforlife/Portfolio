import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './Connect.css';

function Connect() {

  return (
    <div className='connectContainer'>
        <motion.div initial={{ x: -200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='connectInfo'>
            <h1>Connect<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Thanks for checking out my portfolio, if you want to connect with me, 
                send a message!</p>
        </motion.div>
        <div className='socialMedia'>
            <button>
                <i class="fab fa-github"></i>
            </button>
            <button>
                <i class="fas fa-envelope"></i>
            </button>
            <button>
                <i class="fab fa-linkedin"></i>
            </button>
            <button>
                <i class="fab fa-instagram"></i>
            </button>
        </div>
    </div>
  );
}

export default Connect;