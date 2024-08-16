import React from 'react';
import styled from 'styled-components';

interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

const Experience: React.FC = () => {
    const experienceData: ExperienceItemProps[] = [
        {
            title: "FUll Stack Web Developer",
            company: "Schemax Tech Pvt Ltd.",
            period: "Mar 2022 - Mar 2024",
            responsibilities: [
                "Architected and implemented scalable web applications using HTML, CSS, JavaScript, React.js, and Ant Design, resulting in a 40% reduction in load times and a 50% increase in user engagement.",
                "Developed backend solutions with Node.js, NestJS, and MySQL, integrating robust RESTful APIs and third-party services to enhance system interoperability and reduce development time by 30%.",
                "Led cross-functional teams in an Agile environment, improving collaboration and accelerating project delivery by 25%.",
                "Spearheaded the modernization of legacy systems, transitioning to cutting-edge technologies, which drove a 30% increase in system efficiency and reduced operational costs.",
                "Utilized advanced debugging techniques and tools to identify and resolve performance bottlenecks, ensuring optimal application performance and reliability."
            ]
        },
        {
            title: "Junior Quality Control Chemist",
            company: "Mylan Laboratories Ltd.",
            period: "Mar 2021 - Feb 2022",
            responsibilities: [
                "Assisted in routine quality control testing and analysis of raw materials, in-process samples, and finished products, adhering to GMP and regulatory standards.",
                "Performed equipment calibration and maintenance to ensure precision and accuracy in test results, contributing to a 15% increase in testing reliability.",
                "Engaged in root cause analysis and corrective action planning for quality issues, leading to a 20% reduction in defect rates.",
                "Supported documentation and review of quality control processes, ensuring successful regulatory inspections and compliance with industry standards.",
                "Facilitated validation activities for equipment and processes, ensuring adherence to quality standards and enhancing overall process efficiency."
            ]
        }
    ];

    return (
        <ExperienceSection>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceGrid>
                {experienceData.map((item, index) => (
                    <ExperienceItem key={index} className={index % 2 === 0 ? 'left' : 'right'}>
                        <ExperienceContent>
                            <ExperienceTitle>{item.title}</ExperienceTitle>
                            <Company>{item.company}</Company>
                            <Period>{item.period}</Period>
                            <Responsibilities>
                                {item.responsibilities.map((resp, i) => (
                                    <li key={i}>
                                        <Star>⭐</Star> {resp}
                                    </li>
                                ))}
                            </Responsibilities>
                        </ExperienceContent>
                    </ExperienceItem>
                ))}
            </ExperienceGrid>
        </ExperienceSection>
    );
};

const Star = styled.span`
    color: #f39c12; /* Golden color for the star */
    margin-right: 0.5rem;
`;

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
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

const ExperienceGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(200px, auto);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 background: linear-gradient(135deg, #f3e0e0, #f3e4f0);
;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #333;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &.left {
    align-self: flex-start;
  }

  &.right {
    align-self: flex-end;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const ExperienceContent = styled.div`
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

const ExperienceTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  background: transparent;
  color: #333;
  text-align: center;
  font-size: 1.2rem;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #555;
  margin: 0.5rem 0;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0.5rem 0;
`;

const Responsibilities = styled.ul`
  font-size: 1rem;
  color: #333;
  list-style-type: none;
  margin: 0;
  padding-left: 0;

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    .star {
      position: absolute;
      left: 0;
      color: #f39c12; /* Color for the star symbol */
    }
  }
`;

export default Experience;
