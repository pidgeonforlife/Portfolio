import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Connect from "../components/Connect/Connect";
import ProjectFour from "../components/MapleStoryText/MapleStory";
import MapleStoryInfo from "../components/MapleStoryText/MapleStoryInfo";
import MapleStoryDeliverables from "../components/MapleStoryText/MapleStoryDeliverables";
import MapleStoryObjectives from "../components/MapleStoryText/MapleStoryObjectives";
import MapleStoryNavigate from "../components/MapleStoryText/MapleStoryNavigation";
import MapleStoryRole from "../components/MapleStoryText/MapleStoryRole";
import MapleStoryExample from "../components/MapleStoryText/MapleStoryExample";
import Footer from "../components/Connect/Footer";
import { motion, Scroll } from 'framer-motion';
import '../stylesheet/Home.css';

function MaplestoryText() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Navbar />
        <ProjectFour />
        <MapleStoryInfo />
        <MapleStoryObjectives />
        <MapleStoryDeliverables />
        <MapleStoryExample />
        <MapleStoryRole />
        <MapleStoryNavigate />
        <Connect />
        <Footer />
    </motion.div>
  );
}

export default MaplestoryText;