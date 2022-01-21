import React from "react";
import Navbar from "../components/Navbar/Navbar"
import ProjectTwo from "../components/Handy/Handy";
import HandyInfo from "../components/Handy/HandyInfo";
import HandyDeliverables from "../components/Handy/handyDeliverables";
import HandyObjectives from "../components/Handy/HandyObjectives";
import HandyNavigate from "../components/Handy/HandyNavigate";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function Handy() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <ProjectTwo />
        <HandyInfo />
        <HandyObjectives />
        <HandyDeliverables />
        <HandyNavigate />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default Handy;