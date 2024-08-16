// import React from 'react';
// import styled from 'styled-components';

// const Projects: React.FC = () => {
//   return (
//     <ProjectsSection>
//       <h2>Projects</h2>
//       <ProjectList>
//         <ProjectItem>
//           <h3>Expense-Management Application</h3>
//           <Highlight>
//             Developed an intuitive expense management platform, reducing manual data entry by 85% and automating processes to reduce data processing time by 20%. Met all development milestones punctually and under budget with a 98% client satisfaction rate.
//           </Highlight>
//         </ProjectItem>
//         <ProjectItem>
//           <h3>PAYROLL MANAGEMENT Application (VMRDA)</h3>
//           <Highlight>
//             Customized the payroll management system to meet specific project requirements, contributing to 30% of the system customization efforts. Participated in testing and debugging sessions, ensuring data accuracy and system functionality.
//           </Highlight>
//         </ProjectItem>
//         <ProjectItem>
//           <h3>Expense Tracker (Personal Project)</h3>
//           <Highlight>
//             Developed a web-based expense tracking application using HTML, CSS, JavaScript, and React JS. Designed and implemented a user-friendly interface for easy expense tracking and reporting.
//           </Highlight>
//         </ProjectItem>
//       </ProjectList>
//     </ProjectsSection>
//   );
// };

// const ProjectsSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background: #f8f9fa;
//   &:hover {
//     background: #ecf0f1;
//   }
// `;

// const ProjectList = styled.div`
//   margin-top: 1rem;
// `;

// const ProjectItem = styled.div`
//   margin-bottom: 2rem;
// `;

// const Highlight = styled.p`
//   background: #3498db;
//   padding: 1rem;
//   border-radius: 8px;
//   color: white;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #2980b9;
//   }
// `;

// export default Projects;
// src/components/Projects.tsx

// import React from 'react';
// import styled from 'styled-components';
// import {Card, Row} from 'antd'

// const Projects: React.FC = () => {
//   return (
//     <Card>
//     <ProjectsSection>
//       <h2>Projects</h2>

//        {/* <ProjectGrid> */}
//        <ProjectItem>
//           <ProjectImage src="/images/your-image-path.jpg" alt="Payroll Management" />
//           <ProjectContent>
//             <ProjectTitle>PAYROLL MANAGEMENT Application (VMRDA)</ProjectTitle>
//             <ProjectDescription>
//               Played a key role in customizing the payroll management system to meet specific project requirements, contributing to 30% of the overall system customization efforts.<br /><br />
//               Diligently participated in testing and debugging sessions, ensuring data accuracy and system functionality, accounting for 20% of the debugging efforts.<br /><br />
//               Provided essential end-user support, troubleshooting issues, and conducting training sessions, contributing to 25% of the overall end-user support activities.<br /><br />
//               Meticulously documented system functionalities and troubleshooting procedures, accounting for 15% of the documentation efforts.<br /><br />
//               Actively collaborated with team members, offering valuable insights and suggestions to enhance system efficiency, representing 10% of the overall collaborative efforts.<br /><br />
//               Continuously updated technical skills and knowledge through self-learning and professional development opportunities to enhance contributions to the project and team.<br /><br />
//               The client had specific requirements and a complex setup, which made it difficult to adapt our application to their needs. I had to quickly learn the client's processes and tailor our solution to meet their expectations.<br /><br />
//               Through dedication and hard work, I successfully:<br />
//               - Trained the client's team on our application, ensuring they were comfortable using it.<br />
//               - Configured the application to meet the client's unique requirements.<br />
//               - Troubleshot and resolved issues that arose during the implementation process.<br />
//               - Built a strong relationship with the client, ensuring open communication and a smooth working partnership.
//             </ProjectDescription>
//           </ProjectContent>
//         </ProjectItem>
       
//         <ProjectItem>
//           <ProjectImage src="C:\Users\admin\Downloads\expense management\istockphoto-1136366194-612x612.jpg" alt="Expense Management" />
//           <ProjectContent>
//             <ProjectTitle>Expense-Management Application</ProjectTitle>
//             <ProjectDescription>
//               Expense Management System Development: Engineered an intuitive expense management platform, reducing manual data entry by a substantial 85%. Introduced automation, which resulted in a remarkable 20% reduction in data processing time.<br /><br />
//               Project Milestones: Successfully met and exceeded all development milestones, culminating in a project completed punctually and well under budget. Attained a remarkable 98% client satisfaction rate in post-project evaluations.<br /><br />
//               Code Quality and Security: Upheld stringent code quality standards, yielding an exceptional 95% decrease in post-deployment bugs. Enforced robust security measures, ensuring zero data breaches during development and subsequent deployment. Technology Stack Enhancement: Elevated the technology stack to bolster system security and efficiency, realizing a notable 20% decrease in maintenance costs.<br /><br />
//               Implemented a secure login mechanism, which yielded an 80% decrease in unauthorized access attempts.<br /><br />
             
//             </ProjectDescription>
//           </ProjectContent>
//         </ProjectItem>
      
//         <ProjectItem>
//           <ProjectImage src="path/to/expense-management-image.jpg" alt="Expense Management" />
//           <ProjectContent>
//             <ProjectTitle>Expense-Management Application</ProjectTitle>
//             <ProjectDescription>
//               Expense Management System Development: Engineered an intuitive expense management platform, reducing manual data entry by a substantial 85%. Introduced automation, which resulted in a remarkable 20% reduction in data processing time.<br /><br />
//               Project Milestones: Successfully met and exceeded all development milestones, culminating in a project completed punctually and well under budget. Attained a remarkable 98% client satisfaction rate in post-project evaluations.<br /><br />
//               Code Quality and Security: Upheld stringent code quality standards, yielding an exceptional 95% decrease in post-deployment bugs. Enforced robust security measures, ensuring zero data breaches during development and subsequent deployment. Technology Stack Enhancement: Elevated the technology stack to bolster system security and efficiency, realizing a notable 20% decrease in maintenance costs.<br /><br />
//               Implemented a secure login mechanism, which yielded an 80% decrease in unauthorized access attempts.<br /><br />
//               Played a key role in customizing the payroll management system to meet specific project requirements, contributing to 30% of the overall system customization efforts.<br /><br />
//               Diligently participated in testing and debugging sessions, ensuring data accuracy and system functionality, accounting for 20% of the debugging efforts.<br /><br />
//               Provided essential end-user support, troubleshooting issues, and conducting training sessions, contributing to 25% of the overall end-user support activities.<br /><br />
//               Meticulously documented system functionalities and troubleshooting procedures, accounting for 15% of the documentation efforts.<br /><br />
//               Actively collaborated with team members, offering valuable insights and suggestions to enhance system efficiency, representing 10% of the overall collaborative efforts.<br /><br />
//               Continuously updated technical skills and knowledge through self-learning and professional development opportunities to enhance contributions to the project and team.
//             </ProjectDescription>
//           </ProjectContent>
//         </ProjectItem>
//         {/* Add other ProjectItems here */}
//       {/* </ProjectGrid> */}
//       {/* <ProjectList>
//         <ProjectItem>
//           <h3>Expense-Management Application</h3>
//           <p>
//             Developed an intuitive expense management platform, reducing manual data entry by 85% and automating processes to reduce data processing time by 20%.
//           </p>
//         </ProjectItem>
//         <ProjectItem>
//           <h3>PAYROLL MANAGEMENT Application (VMRDA)</h3>
//           <p>
//             Customized the payroll management system to meet specific project requirements, contributing to 30% of the system customization efforts.
//           </p>
//         </ProjectItem>
//         <ProjectItem>
//           <h3>Expense Tracker (Personal Project)</h3>
//           <p>
//             Developed a web-based expense tracking application using HTML, CSS, JavaScript, and React JS.
//           </p>
//         </ProjectItem>
//       </ProjectList> */}
//     </ProjectsSection>
//     </Card>
//   );
// };

// const ProjectsSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background: #fff;
//   border-bottom: 1px solid #ddd;
// `;

// const ProjectGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: 1fr 1fr;
//   align-items: start;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ProjectImage = styled.img`
//   width: 100%;
//   max-width: 300px;
//   border-radius: 8px;
// `;

// const ProjectContent = styled.div`
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   width: 100%;
//   max-width: 500px;
//   text-align: left;
//   position: relative;
//   overflow: hidden;
// `;

// const ProjectTitle = styled.h3`
//   margin: 0;
//   padding: 1rem;
//   background: #ff9900;
//   color: #fff;
//   text-align: center;
//   font-size: 1.2rem;
// `;

// const ProjectDescription = styled.p`
//   padding: 1rem;
//   font-size: 1rem;
//   color: #333;
// `;

// const ProjectList = styled.div`
//   margin-top: 1rem;
// `;

// const ProjectItem = styled.div`
//   margin-bottom: 2rem;
//   padding: 1rem;
//   background: #f4f4f4;
//   border-radius: 8px;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #e2e2e2;
//   }
// `;

// export default Projects;


import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const Projects: React.FC = () => {
  return (
    <Card>
         <h2>Projects</h2>
      <ProjectsSection>
       

        <ProjectGrid>
          <ProjectItem className="left">
            {/* <ProjectImage src="/images/payroll-management.jpg" alt="Payroll Management" /> */}
            <ProjectContent>
              <ProjectTitle>PAYROLL MANAGEMENT Application (VMRDA)</ProjectTitle>
              <ProjectDescription>
                Played a key role in customizing the payroll management system to meet specific project requirements, contributing to 30% of the overall system customization efforts.<br /><br />
                Diligently participated in testing and debugging sessions, ensuring data accuracy and system functionality, accounting for 20% of the debugging efforts.<br /><br />
                Provided essential end-user support, troubleshooting issues, and conducting training sessions, contributing to 25% of the overall end-user support activities.<br /><br />
                Meticulously documented system functionalities and troubleshooting procedures, accounting for 15% of the documentation efforts.<br /><br />
                Actively collaborated with team members, offering valuable insights and suggestions to enhance system efficiency, representing 10% of the overall collaborative efforts.<br /><br />
                Continuously updated technical skills and knowledge through self-learning and professional development opportunities to enhance contributions to the project and team.<br /><br />
                The client had specific requirements and a complex setup, which made it difficult to adapt our application to their needs. I had to quickly learn the client's processes and tailor our solution to meet their expectations.<br /><br />
                Through dedication and hard work, I successfully:<br />
                - Trained the client's team on our application, ensuring they were comfortable using it.<br />
                - Configured the application to meet the client's unique requirements.<br />
                - Troubleshot and resolved issues that arose during the implementation process.<br />
                - Built a strong relationship with the client, ensuring open communication and a smooth working partnership.
              </ProjectDescription>
            </ProjectContent>
          </ProjectItem>

          <ProjectItem className="right">
            {/* <ProjectImage src="C:/Users/admin/Downloads/expense management/istockphoto-1136366194-612x612.jpg" alt="Expense Management" /> */}
            <ProjectContent>
              <ProjectTitle>Expense-Management Application</ProjectTitle>
              <ProjectDescription>
                Expense Management System Development: Engineered an intuitive expense management platform, reducing manual data entry by a substantial 85%. Introduced automation, which resulted in a remarkable 20% reduction in data processing time.<br /><br />
                Project Milestones: Successfully met and exceeded all development milestones, culminating in a project completed punctually and well under budget. Attained a remarkable 98% client satisfaction rate in post-project evaluations.<br /><br />
                Code Quality and Security: Upheld stringent code quality standards, yielding an exceptional 95% decrease in post-deployment bugs. Enforced robust security measures, ensuring zero data breaches during development and subsequent deployment. Technology Stack Enhancement: Elevated the technology stack to bolster system security and efficiency, realizing a notable 20% decrease in maintenance costs.<br /><br />
                Implemented a secure login mechanism, which yielded an 80% decrease in unauthorized access attempts.<br /><br />
              </ProjectDescription>
            </ProjectContent>
          </ProjectItem>

          <ProjectItem className="left">
            {/* <ProjectImage src="path/to/expense-management-image.jpg" alt="Expense Management" /> */}
            <ProjectContent>
              <ProjectTitle>Expense-Management Application</ProjectTitle>
              <ProjectDescription>
                Expense Management System Development: Engineered an intuitive expense management platform, reducing manual data entry by a substantial 85%. Introduced automation, which resulted in a remarkable 20% reduction in data processing time.<br /><br />
                Project Milestones: Successfully met and exceeded all development milestones, culminating in a project completed punctually and well under budget. Attained a remarkable 98% client satisfaction rate in post-project evaluations.<br /><br />
                Code Quality and Security: Upheld stringent code quality standards, yielding an exceptional 95% decrease in post-deployment bugs. Enforced robust security measures, ensuring zero data breaches during development and subsequent deployment. Technology Stack Enhancement: Elevated the technology stack to bolster system security and efficiency, realizing a notable 20% decrease in maintenance costs.<br /><br />
                Implemented a secure login mechanism, which yielded an 80% decrease in unauthorized access attempts.<br /><br />
                Played a key role in customizing the payroll management system to meet specific project requirements, contributing to 30% of the overall system customization efforts.<br /><br />
                Diligently participated in testing and debugging sessions, ensuring data accuracy and system functionality, accounting for 20% of the debugging efforts.<br /><br />
                Provided essential end-user support, troubleshooting issues, and conducting training sessions, contributing to 25% of the overall end-user support activities.<br /><br />
                Meticulously documented system functionalities and troubleshooting procedures, accounting for 15% of the documentation efforts.<br /><br />
                Actively collaborated with team members, offering valuable insights and suggestions to enhance system efficiency, representing 10% of the overall collaborative efforts.<br /><br />
                Continuously updated technical skills and knowledge through self-learning and professional development opportunities to enhance contributions to the project and team.
              </ProjectDescription>
            </ProjectContent>
          </ProjectItem>
          {/* Add other ProjectItems here */}
        </ProjectGrid>
      </ProjectsSection>
    </Card>
  );
};

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// const ProjectItem = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;

//   &.left {
//     grid-column: 1 / 2;
//     justify-content: flex-start;
//   }
  
//   &.right {
//     grid-column: 2 / 3;
//     justify-content: flex-end;
//     flex-direction: row-reverse;
//   }

//   @media (max-width: 768px) {
//     grid-column: 1 / 2;
//     flex-direction: column;
//   }
// `;

const ProjectItem = styled.div`
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
`;
const ProjectImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin: 1rem;
`;

const ProjectContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  background: #ff9900;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  padding: 1rem;
  font-size: 1rem;
  color: #333;
`;

export default Projects;
