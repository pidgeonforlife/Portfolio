import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <Footer />
    </motion.div>
  );
}

export default Home;