// import React from 'react';
// import styled from 'styled-components';

// interface AboutProps {}

// const About: React.FC<AboutProps> = () => {
//   return (
//     <AboutSection>
//       <h2>About Me</h2>
//       <Highlight>
//         "To further hone my skills and expertise in web development, I aim to design and deliver cutting-edge, user-centric websites and applications that exceed client expectations, aligning with Amazon's customer-obsessed philosophy."
//       </Highlight>
//     </AboutSection>
//   );
// };

// const AboutSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background: #f8f9fa;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #ecf0f1;
//   }
// `;

// const Highlight = styled.p`
//   background: #f39c12;
//   padding: 1rem;
//   border-radius: 8px;
//   color: white;
//   font-weight: bold;
//   font-size: 1.2rem;
// `;

// export default About;
// src/components/About.tsx


import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const About: React.FC = () => {
  return (
    // <Card>
      <AboutSection>
        <SectionTitle>Profile Summary</SectionTitle>
        <Highlight>
          As a dedicated web developer, I strive to design and deliver innovative, user-centric websites and applications. My goal is to continuously enhance my skills and align my work with customer-obsessed philosophy, ensuring that each project not only meets but exceeds client expectations.
        </Highlight>
      </AboutSection>
    // </Card>
  );
};

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: url('/reg.jpg') no-repeat center center; /* Path to the image in the public folder */
  background-size: cover; /* Ensure the background covers the section */
  color: white; /* Text color */
  border-bottom: 1px solid #ddd;
`;

const Highlight = styled.p`
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
  padding: 1rem;
  border-radius: 8px;
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 50px;
    height: 5px;
    background: linear-gradient(135deg, #ff6e7f, #bfe9ff);
    border-radius: 5px;
  }`

export default About;
