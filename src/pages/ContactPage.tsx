// import React from 'react';
// import styled from 'styled-components';

// const Contact: React.FC = () => {
//   return (
//     <ContactSection>
//       <h2>Contact</h2>
//       <ContactInfo>
//         <p>Hyderabad, Telangana</p>
//         <p>+91 9666 219 552</p>
//         <p>muralikrishnarambarki13@gmail.com</p>
//       </ContactInfo>
//     </ContactSection>
//   );
// };

// const ContactSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
//   background: #f8f9fa;
//   &:hover {
//     background: #ecf0f1;
//   }
// `;

// const ContactInfo = styled.div`
//   margin-top: 1rem;
//   font-size: 1.2rem;
// `;

// export default Contact;

// src/components/Contact.tsx
import React from 'react';
import styled from 'styled-components';

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <h2>Contact</h2>
      <ContactInfo>
        <p>Hyderabad, Telangana</p>
        <p>+91 9666 219 552</p>
        <p>muralikrishnarambarki13@gmail.com</p>
      </ContactInfo>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export default Contact;
