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

import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const About: React.FC = () => {
  return (
    <Card
    >
    <AboutSection>
      <h2>About Me</h2>
      <Highlight>
        As a dedicated web developer, I strive to design and deliver innovative, user-centric websites and applications. My goal is to continuously enhance my skills and align my work with Amazon's customer-obsessed philosophy, ensuring that each project not only meets but exceeds client expectations.
      </Highlight>
    </AboutSection>
    </Card>
  );
};

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const Highlight = styled.p`
  background: linear-gradient(135deg, #ff6e7f, #bfe9ff); /* Gradient background */
  padding: 1rem;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  max-width: 800px;
  margin: 0 auto;
`;

export default About;

