import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Connect from "../components/Connect/Connect";
import ProjectThree from "../components/SYPTech/sypTech";
import SYPTechInfo from "../components/SYPTech/SYPTechInfo";
import SYPTechObjectives from "../components/SYPTech/SYPTechObjective";
import SYPTechDeliverables from "../components/SYPTech/SYPTechDeliverables";
import SYPTechNavigate from "../components/SYPTech/SYPTechNavigate";
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function SYPTech() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <ProjectThree />
        <SYPTechInfo />
        <SYPTechObjectives />
        <SYPTechDeliverables />
        <SYPTechNavigate />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default SYPTech;