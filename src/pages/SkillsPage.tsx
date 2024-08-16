// import React from 'react';
// import styled from 'styled-components';

// const Skills: React.FC = () => {
//   return (
//     <SkillsSection>
//       <h2>Skills</h2>
//       <SkillList>
//         <SkillItem>Fullstack Development</SkillItem>
//         <SkillItem>QA Testing</SkillItem>
//         <SkillItem>Web Designing</SkillItem>
//         <SkillItem>HTML, CSS, JavaScript</SkillItem>
//         <SkillItem>ReactJs</SkillItem>
//         <SkillItem>Ms Office</SkillItem>
//         <SkillItem>NodeJS</SkillItem>
//         <SkillItem>NestJs</SkillItem>
//         <SkillItem>MySQL Database</SkillItem>
//         <SkillItem>API Integration</SkillItem>
//       </SkillList>
//     </SkillsSection>
//   );
// };

// const SkillsSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background: #f8f9fa;
//   &:hover {
//     background: #ecf0f1;
//   }
// `;

// const SkillList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const SkillItem = styled.li`
//   margin: 0.5rem 0;
//   background: #2ecc71;
//   padding: 0.5rem;
//   border-radius: 8px;
//   color: white;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #27ae60;
//   }
// `;

// export default Skills;
// src/components/Skills.tsx
import React from 'react';
import styled from 'styled-components';

const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <SkillList>
        <SkillItem>Fullstack Development</SkillItem>
        <SkillItem>QA Testing</SkillItem>
        <SkillItem>Web Designing</SkillItem>
        <SkillItem>HTML, CSS, JavaScript</SkillItem>
        <SkillItem>ReactJs</SkillItem>
        <SkillItem>Ms Office</SkillItem>
        <SkillItem>NodeJS</SkillItem>
        <SkillItem>NestJs</SkillItem>
        <SkillItem>MySQL Database</SkillItem>
        <SkillItem>API Integration</SkillItem>
      </SkillList>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin: 0.5rem 0;
  background: #ff9900;
  padding: 0.5rem;
  border-radius: 8px;
  color: white;
  transition: background 0.3s ease;

  &:hover {
    background: #cc7a00;
  }
`;

export default Skills;
