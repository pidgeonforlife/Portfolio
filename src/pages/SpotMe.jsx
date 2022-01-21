import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Connect from "../components/Connect/Connect";
import ProjectOne from "../components/SpotMe/projectOnePage";
import ProjectOneInfo from "../components/SpotMe/projectOneInfo";
import ProjectOneObjective from "../components/SpotMe/projectOneObjective";
import ProjectOneDeliverables from "../components/SpotMe/projectOneDeliverables";
import ProjectOneExample from "../components/SpotMe/projectOneExample";
import ProjectOneNavigate from "../components/SpotMe/projectOneNavigate";
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function SpotMe() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <ProjectOne />
        <ProjectOneInfo />
        <ProjectOneObjective />
        <ProjectOneDeliverables />
        <ProjectOneExample />
        <ProjectOneNavigate />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default SpotMe;