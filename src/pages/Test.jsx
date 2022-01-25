import React from "react";
import Accordions from "../components/Skills/Accordion";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function Test() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Accordions />
    </motion.div>
  );
}

export default Test;