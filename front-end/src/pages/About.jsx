import React from 'react';
import mentor from "../images/mentor.png";
import image1 from "../images/image1.png"; 
import image2 from "../images/image2.png"; 
import image3 from "../images/image3.png"; 
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container">
        <h2 className="text-4xl text-center mb-8 font-bold text-gray-800">About Us</h2>
        <div className="about__info">
          <p className="about__description">
            At LMCC, we’re passionate about creating a vibrant community where alumni from all walks of life come together, each bringing their unique stories and experiences. We believe that by fostering open conversations, we can spark collaboration and mutual growth.
          </p>
          <div className="flex-1 flex items-center justify-center p-6 flex-col">
            <img
              src={mentor}
              alt="mentor"
              className="mb-6 w-full max-w-2xl h-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          <h2 className="text-4xl text-center mb-8 font-bold text-gray-800">Key Focus Areas</h2>

          {/* Image Cards Section */}
          <div className="image-cards">
            <ImageCard src={image1} text="Community Building" />
            <ImageCard src={image2} text="Collaboration Opportunities" />
            <ImageCard src={image3} text="Artistic Expression" />
          </div>

          <br />
        

          {/* Goals Accordion Section */}
          <h2 className="text-4xl text-center mb-8 font-bold text-gray-800">Goals</h2>
          <GoalsAccordion />
        </div>
      </div>
    </section>
  );
};
const GoalsAccordion = () => {
  return (
    <>
      <Accordion className="accordion">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          aria-controls="community-building-content" 
          id="community-building-header"
        >
          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6">Community Building</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           At LMCC, we cultivate a vibrant community that fosters connections among alumni, inspiring active engagement and collaborative growth.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      
      <Accordion className="accordion">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          aria-controls="collaboration-content" 
          id="collaboration-header"
        >
          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6">Collaboration Opportunities</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We provide pathways for alumni to collaborate on projects and share ideas, connecting members with similar goals to enhance creativity and personal growth.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />} 
          aria-controls="artistic-expression-content" 
          id="artistic-expression-header"
        >
          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6">Inclusive Artistic Expression</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We celebrate diverse voices in the arts, encouraging alumni to share their unique perspectives in an inclusive environment where all forms of artistic expression are valued.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};




// ImageCard Component
const ImageCard = ({ src, text }) => {
  return (
    <div className="image-card">
      <img src={src} alt={text} className="image-card__img" />
      <div className="image-card__overlay">
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default About;




