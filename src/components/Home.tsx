// import React from 'react';
// import { motion } from 'framer-motion';
// import styled from 'styled-components';

// const Home: React.FC = () => {
//   return (
//     <HomeSection>
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Title>Welcome to My Portfolio</Title>
//         <Subtitle>Explore my work and skills.</Subtitle>
//       </motion.div>
//     </HomeSection>
//   );
// };

// const HomeSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(120deg, #3498db, #8e44ad);
//   color: #fff;
//   text-align: center;
//   &:hover {
//     background: linear-gradient(120deg, #2980b9, #6dd5fa);
//   }
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem;
// `;

// const Subtitle = styled.p`
//   font-size: 1.5rem;
// `;

// export default Home;
import React from 'react';
import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

const Home: React.FC = () => {
  return (
    <HomeSection>
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <Education/>
      <Contact />
    </HomeSection>
  );
};

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
  background: linear-gradient(135deg);
`;

export default Home;
