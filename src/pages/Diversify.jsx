import React from "react";
import Navbar from "../components/Navbar/Navbar"
import ProjectFive from "../components/Diversify/Diversify";
import DiversifyInfo from "../components/Diversify/DiversifyInfo";
import DiversifyObjectives from "../components/Diversify/DiversifyObjectives";
import DiversifyDeliverables from "../components/Diversify/DiversifyDeliverables";
import DiversifyPresentation from "../components/Diversify/DiversifyPresentation";
import DiversifyRole from "../components/Diversify/DiversifyRoles";
import DiversifyNavigate from "../components/Diversify/DiversifyNavigation";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function Diversify() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <ProjectFive />
        <DiversifyInfo />
        <DiversifyObjectives />
        <DiversifyDeliverables />
        <DiversifyPresentation />
        <DiversifyRole />
        <DiversifyNavigate />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default Diversify;