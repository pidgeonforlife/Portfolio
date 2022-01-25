import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import PersonalProjects from "../components/PersonalProjects/PersonalProjects";
import Skills from "../components/Skills/Skills";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <PersonalProjects />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default Home;