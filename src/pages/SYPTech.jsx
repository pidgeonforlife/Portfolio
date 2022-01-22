import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Connect from "../components/Connect/Connect";
import ProjectThree from "../components/SYPTech/sypTech";
import SYPTechInfo from "../components/SYPTech/SYPTechInfo";
import SYPTechObjectives from "../components/SYPTech/SYPTechObjective";
import SYPTechDeliverables from "../components/SYPTech/SYPTechDeliverables";
import SYPTechExample from "../components/SYPTech/SYPTechExample";
import SYPTechNavigate from "../components/SYPTech/SYPTechNavigate";
import SYPTechRole from "../components/SYPTech/SYPTechRole";
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
        <SYPTechExample />
        <SYPTechRole />
        <SYPTechNavigate />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default SYPTech;