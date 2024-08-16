// import React from 'react';
// import styled from 'styled-components';
// import { Card } from 'antd';

// interface EducationItemProps {
//     title: string;
//     institution: string;
//     year: string;
//     details: string[];
//     alignment?: 'left' | 'right';
// }

// const Education: React.FC = () => {
//     const educationData: EducationItemProps[] = [
//         {
//             title: "Bachelor Degree  of Science",
//             institution: "Andhra University,Aditya degree college Vizianagaram",
//             year: "2017 - 2020",
//             details: [
//                 "Computer Science Fundamentals",
//                 "Mathematics for Science",
//                 "Physics",
//                 "Chemistry",
//                 "Statistical Methods",   
//             ],
//             alignment: 'left'
//         },
//         {
//             title: "Higher Secondary Education",
//             institution: "Srinivasa Junior College, Visakhapatnam",
//             year: "2013 - 2015",
//             details: [
//                 "Major: Mathematics, Physics, and Chemistry"
//             ],
//             alignment: 'right'
//         }
//     ];

//     return (
//         <Card>
//             <EducationSection>
//                 <SectionTitle>Education</SectionTitle>
//                 <EducationGrid>
//                     {educationData.map((item, index) => (
//                         <EducationItem key={index} className={item.alignment}>
//                             <EducationContent>
//                                 <EducationTitle>{item.title}</EducationTitle>
//                                 <EducationDescription>
//                                     {item.institution}<br />
//                                     <strong>Year:</strong> {item.year}<br /><br />
//                                     Key Courses:
//                                     <ul>
//                                         {item.details.map((detail, i) => (
//                                             <li key={i}>{detail}</li>
//                                         ))}
//                                     </ul>
//                                 </EducationDescription>
//                             </EducationContent>
//                         </EducationItem>
//                     ))}
//                 </EducationGrid>
//             </EducationSection>
//         </Card>
//     );
// };

// const EducationSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background: #f9f9f9;
//   border-bottom: 1px solid #ddd;
// `;

// const EducationGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: auto;
//   grid-auto-flow: row;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const EducationItem = styled.div`
//   margin-bottom: 2rem;
//   padding: 1rem;
//   border-radius: 8px;
//   background: linear-gradient(135deg, #ff6e7f, #bfe9ff);
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
//   }

//   &.left {
//     grid-column: 1 / 2;
//   }

//   &.right {
//     grid-column: 2 / 3;
//     text-align: right;
//   }

//   @media (max-width: 768px) {
//     grid-column: 1 / 2;
//     text-align: left;
//   }
// `;

// const EducationContent = styled.div`
//   background: transparent;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   width: 100%;
//   max-width: 700px;
//   text-align: left;
//   position: relative;
//   overflow: hidden;
// `;

// const EducationTitle = styled.h3`
//   margin: 0;
//   padding: 1rem;
//   background: ;
//   color: #fff;
//   text-align: center;
//   font-size: 1.2rem;
// `;

// const EducationDescription = styled.p`
//   padding: 1rem;
//   font-size: 1rem;
//   color: #333;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 1.5rem;
//   position: relative;
//   display: inline-block;
  
//   &:before {
//     content: '';
//     position: absolute;
//     left: 50%;
//     bottom: -10px;
//     transform: translateX(-50%);
//     width: 50px;
//     height: 5px;
//     background: linear-gradient(135deg, #ff6e7f, #bfe9ff);
//     border-radius: 5px;
//   }

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// export default Education;


import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

interface EducationItemProps {
    title: string;
    institution: string;
    year: string;
    percentage:any;
    details: string[];
    alignment?: 'left' | 'right';
    imageSrc?: string;
}

const Education: React.FC = () => {
    const educationData: EducationItemProps[] = [
        {
            title: " 🎓 Bachelor Degree of Science",
            institution: "Andhra University, Aditya Degree College Vizianagaram 📍",
            year: "2017 - 2020",
            percentage:"70%",
            details: [
                "Computer Science Fundamentals",
                "Mathematics for Science",
                "Physics",
                "Chemistry",
                "Statistical Methods",
            ],
            alignment: 'left',
                  },
        {
            title: " 🏫 Higher Secondary Education",
            institution: "Srinivasa Junior College, Vizianagaram 📍",
            year: "2015 - 2017",
            percentage:"69%",
            details: [
                "Major: Mathematics, Physics, and Chemistry"
            ],
            alignment: 'right'
        },
        {
            title: " 🏫 Secondary School Education",
            institution: "Gayatri High School, Vizianagaram 📍",
            year: "2015",
            percentage:"8.0 CGPA",
            details: [
                "Major: General "
            ],
            alignment: 'left'
        }
    ];

    return (
        <Card>
            <EducationSection>
                <SectionTitle>Education</SectionTitle>
                <EducationGrid>
                    {educationData.map((item, index) => (
                        <EducationItem key={index} className={item.alignment}>
                            {/* {item.imageSrc && <EducationImage src={item.imageSrc} alt={item.title} />} */}
                            <EducationContent>
                                <EducationTitle>{item.title}</EducationTitle>
                                <EducationDescription>
                                    {item.institution}<br />
                                    <strong>Year:</strong> {item.year}<br /><br />
                                    Key Courses:
                                    <ul>
                                        {item.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </EducationDescription>
                            </EducationContent>
                        </EducationItem>
                    ))}
                </EducationGrid>
            </EducationSection>
        </Card>
    );
};

const EducationSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

const EducationGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;

background: linear-gradient(135deg, #c8e6c9, #f1f8e9);


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

const EducationContent = styled.div`
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

const EducationImage = styled.img`
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

const EducationTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
`;

const EducationDescription = styled.p`
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

export default Education;
