import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import Accordions from '../Skills/Accordion';
import './PersonalProjects.css';

function PersonalProjects() {

  return (
    <div className='projectContainer' id='project'>
        <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='aboutInfo'>
            <h1>Projects<span style={{color: '#94CBFF'}}>.</span></h1>
            <p>Take a look at some of my personal projects over the years by clicking on it!</p>
        </motion.div>
        <div className='projectShowCase'>
            <div className='projectBox1'>
            <Link to='/SpotMe' className='projectBox1Img'>
              <motion.img whileHover={{ 
                  scale: 1.1
                  }} whileTap={{ scale: 0.8 }} src='/images/SpotMe.png' />
            </Link>
            </div>
            <div className='projectBox2'>
            <Link to='/Handy' className='projectBox3Img'>
              <motion.img whileHover={{ 
                  scale: 1.1
                  }} whileTap={{ scale: 0.8 }} src='/images/Handy.png' />
            </Link>
            </div>
            <div className='projectBox3'>
            <Link to='/SYPTech' className='projectBox1Img'>
            <motion.img whileHover={{ 
                  scale: 1.1
                  }} whileTap={{ scale: 0.8 }} src='/images/SYPTech.png' />
            </Link>
            </div>
            <div className='projectBox4'>
            <Link to='/MapleStory' className='projectBox1Img'>
            <motion.img whileHover={{ 
                  scale: 1.1
                  }} whileTap={{ scale: 0.8 }} src='/images/Maplestory.png' />
            </Link>
            </div>
        </div>
    </div>
  );
}

export default PersonalProjects;