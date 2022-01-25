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
          <h2><i class="fas fa-code"></i> FrontEnd Tools</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Vue.js</p>
          </Typography>
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
          <h2><i class="fas fa-database"></i> BackEnd Tools</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Vue.js</p>
          </Typography>
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
          <h2><i class="fab fa-dropbox"></i> Other Tools</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Vue.js</p>
          </Typography>
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