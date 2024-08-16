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
import { Card } from 'antd';

const Skills: React.FC = () => {
    return (
        <Card>
            <SkillsSection>
                <SectionTitle>Skills</SectionTitle>
                <SkillsGrid>

                    {/* Client Interaction & Support */}
                    <SkillItem className="left">
                        <SkillContent>
                            <SkillTitle>Client Interaction & Support</SkillTitle>
                            <SkillDescription>
                                Proven expertise in client interaction, providing exceptional support and resolving complex issues with a focus on delivering tailored solutions.<br /><br />
                                Key Achievements:
                                <ul>
                                    <li>Proactively engaged with clients to understand their needs and requirements, ensuring alignment with project goals.</li>
                                    <li>Provided timely and effective support, addressing client concerns and troubleshooting issues to ensure satisfaction.</li>
                                    <li>Implemented robust solutions to resolve technical and operational problems, enhancing overall client experience.</li>
                                    <li>Facilitated clear communication between clients and development teams, streamlining issue resolution and project updates.</li>
                                    <li>Consistently exceeded client expectations by delivering high-quality support and solutions in a fast-paced environment.</li>
                                </ul>
                            </SkillDescription>
                        </SkillContent>
                    </SkillItem>

                    {/* Frontend Development */}
                    <SkillItem className="right">
                        <SkillContent>
                            <SkillTitle>Frontend Development</SkillTitle>
                            <SkillDescription>
                                Demonstrated mastery in crafting intuitive, visually stunning user interfaces using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. Adept at leveraging cutting-edge frameworks like <strong>React.js</strong> and <strong>Antd</strong> to build responsive and dynamic web applications. Proven ability to translate design concepts into functional and aesthetically pleasing digital experiences, ensuring seamless user interactions and accessibility across devices and platforms.
                                <br /><br />
                                Key Achievements:
                                <ul>
                                    <li>Developed interactive web components and single-page applications that enhanced user engagement and satisfaction.</li>
                                    <li>Optimized front-end performance to ensure fast loading times and smooth user experiences.</li>
                                    <li>Implemented advanced UI/UX principles, resulting in a significant increase in user retention and overall application usability.</li>
                                </ul>
                            </SkillDescription>
                        </SkillContent>
                    </SkillItem>

                    {/* Backend Development */}
                    <SkillItem className="left">
                        <SkillContent>
                            <SkillTitle>Backend Development</SkillTitle>
                            <SkillDescription>
                                Expertise in designing and maintaining robust server-side solutions using <strong>Node.js</strong> and <strong>Nest.js</strong>. Skilled in creating efficient, scalable backend architectures and managing databases with <strong>SQL</strong> and technologies. Proven track record in developing APIs, integrating third-party services, and optimizing server performance to support high-traffic applications and ensure reliability.
                                <br /><br />
                                Key Achievements:
                                <ul>
                                    <li>Architected and deployed secure, high-performance server-side applications handling complex business logic and data processing.</li>
                                    <li>Enhanced database performance and scalability through advanced indexing, query optimization, and schema design.</li>
                                    <li>Developed and maintained <strong>RESTful APIs</strong> and microservices that streamlined application integration and improved system interoperability.</li>
                                </ul>
                            </SkillDescription>
                        </SkillContent>
                    </SkillItem>


                    {/* Quality Assurance */}
                    <SkillItem className="right">
                        <SkillContent>
                            <SkillTitle>Quality Assurance</SkillTitle>
                            <SkillDescription>
                                Skilled in creating comprehensive test cases, automation frameworks, and ensuring high-quality deliverables through rigorous testing.
                            </SkillDescription>
                        </SkillContent>
                    </SkillItem>

                    {/* Soft Skills */}
                    <SkillItem className="left">
                        <SkillContent>
                            <SkillTitle>Soft Skills</SkillTitle>
                            <SkillDescription>
                                Effective communication, team collaboration, adaptability, and problem-solving abilities.<br /><br />
                                Key Attributes:
                                <ul>
                                    <li><strong>Communication:</strong> Excellent verbal and written communication skills, enabling clear and concise information sharing.</li>
                                    <li><strong>Collaboration:</strong> Strong team player with experience working in cross-functional teams to achieve common goals.</li>
                                    <li><strong>Adaptability:</strong> Ability to quickly adapt to changing environments and learn new skills to meet project demands.</li>
                                    <li><strong>Problem-Solving:</strong> Proficient in identifying issues and developing creative solutions to overcome challenges.</li>
                                    <li><strong>Time Management:</strong> Skilled in prioritizing tasks and managing time effectively to meet deadlines.</li>
                                </ul>
                            </SkillDescription>
                        </SkillContent>
                    </SkillItem>

                </SkillsGrid>
            </SkillsSection>
        </Card>
    );
};

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #ff6e7f, #bfe9ff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &.left {
    grid-column: 1 / 2;
  }

  &.right {
    grid-column: 2 / 3;
    text-align: right;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    text-align: left;
  }
`;

const SkillContent = styled.div`
  background: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

const SkillTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  background: ;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;

const SkillDescription = styled.p`
  padding: 1rem;
  font-size: 1rem;
  color: #333;
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
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default Skills;
