import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './projectExample.css';

function ProjectOneExample() {

  return (
    <div className='projectExample'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo' id='projectWireframe'>
            <h1>Wireframes<span style={{color: '#94CBFF'}}>.</span></h1>
            <img src='/images/SpotMeWireframe.png' />
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo' id='projectVideo'>
            <h1>Presentation<span style={{color: '#94CBFF'}}>.</span></h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DInyMgcVK8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </motion.div>
    </div>
  );
}

export default ProjectOneExample;