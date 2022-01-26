import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './Connect.css';

function Connect() {

  return (
    <div className='connectContainer' id='contact'>
        <motion.div initial={{ x: -200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='connectInfo'>
            <h1>Connect<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Thanks for checking out my portfolio, if you want to connect with me, 
                send a message!</p>
        </motion.div>
        <div className='socialMedia'>
            <button>
                <a href='https://github.com/pidgeonforlife' target="_blank"><i className="fab fa-github"></i></a>
            </button>
            <button>
                <a href='mailto:eric.choiyongseok@gmail.com' target="_blank"><i className="fas fa-envelope"></i></a>
            </button>
            <button>
                <a href='https://www.linkedin.com/in/eric-choi-5524ba204/' target="_blank"><i className="fab fa-linkedin"></i></a>
            </button>
            <button>
                <a href='https://www.instagram.com/seokk.e/?hl=en' target="_blank"><i className="fab fa-instagram"></i></a>
            </button>
        </div>
    </div>
  );
}

export default Connect;