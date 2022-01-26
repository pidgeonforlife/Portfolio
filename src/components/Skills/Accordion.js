import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css';

function Accordions() {
    return (
    <div className='skillsWrapper'>
    <div className='frontEnd'>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2><i className="fas fa-code" style={{ color: '#94CBFF'}}></i> FrontEnd Tools</h2>
        </AccordionSummary>
        <AccordionDetails>
            <div className='skillItem'>
                <h3><i className="fab fa-html5" ></i> HTML5</h3>
                <span className='experienceLevel'>Intermediate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-css3-alt"></i> CSS3</h3>
                <span className='experienceLevel'>Intermediate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-js-square"></i> JavaScript</h3>
                <span className='experienceLevel'>Moderate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-react"></i> React</h3>
                <span className='experienceLevel'>Moderate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-vuejs"></i> Vue.js</h3>
                <span className='experienceLevel'>Moderate</span>
            </div>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='backEnd'>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2><i className="fas fa-database"></i> BackEnd Tools</h2>
        </AccordionSummary>
        <AccordionDetails>
            <div className='skillItem'>
                <h3><i className="fab fa-python"></i> Python</h3>
                <span className='experienceLevel'>Intermediate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-java"></i> Java</h3>
                <span className='experienceLevel'>Moderate</span>
            </div>
            <div className='skillItem'>
                <h3><span className="iconify" data-icon="simple-icons:firebase"></span> Firebase</h3>
                <span className='experienceLevel'>Moderate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-node-js"></i> Node.js</h3>
                <span className='experienceLevel'>Learning</span>
            </div>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='otherTools'>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2><i className="fab fa-dropbox" style={{ color: '#94CBFF'}}></i> Other Tools</h2>
        </AccordionSummary>
        <AccordionDetails>
            <div className='skillItem'>
                <h3><i className="fab fa-figma"></i> Figma</h3>
                <span className='experienceLevel'>Intermediate</span>
            </div>
            <div className='skillItem'>
                <h3><i className="fab fa-github-square"></i> Git/Github</h3>
                <span className='experienceLevel'>Moderate</span>
            </div>
        </AccordionDetails>
      </Accordion>
      </div>

      
    </div>
  );
}

export default Accordions;

// const data = [
//     {
//         skill: 'FrontEnd',
//         answer: 'HTML',

//     },
//     {
//         skill: 'BackEnd',
//         answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices lorem egestas odio faucibus rutrum. Aliquam erat volutpat. Quisque quis sapien vitae leo dictum porttitor. Praesent porttitor consectetur tellus, eget interdum mauris. Cras sem dolor, faucibus quis vehicula eu, gravida et enim. Donec sit amet justo tortor. In hac habitasse platea dictumst. Aliquam bibendum viverra risus, sit amet semper metus tincidunt nec. Morbi eget porttitor arcu, ut ullamcorper mauris. Nulla vel erat ante.',

//     },
//     {
//         skill: 'Others',
//         answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices lorem egestas odio faucibus rutrum. Aliquam erat volutpat. Quisque quis sapien vitae leo dictum porttitor. Praesent porttitor consectetur tellus, eget interdum mauris. Cras sem dolor, faucibus quis vehicula eu, gravida et enim. Donec sit amet justo tortor. In hac habitasse platea dictumst. Aliquam bibendum viverra risus, sit amet semper metus tincidunt nec. Morbi eget porttitor arcu, ut ullamcorper mauris. Nulla vel erat ante.',

//     },
// ]