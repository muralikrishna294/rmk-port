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

// import React from 'react';
// import styled from 'styled-components';

// const Contact: React.FC = () => {
//   return (
//     <ContactSection>
//       {/* <h2>Contact</h2> */
//       <SectionTitle>Contact</SectionTitle>}
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
//   background: linear-gradient(135deg, #ff6e7f, #bfe9ff); /* Gradient background */
//   border-bottom: 1px solid #ddd;
//   color: white;
// `;

// const ContactInfo = styled.div`
//   margin-top: 1rem;
//   font-size: 1.2rem;
//   font-weight: bold;
  
//   p {
//     margin: 0.5rem 0;
//   }
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
 
//    }   `

// export default Contact;

import React from 'react';
import styled from 'styled-components';

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <SectionTitle>Contact</SectionTitle>
      <ContactInfo>
        <ContactItem>
          <LocationIcon>📍</LocationIcon>
          <p>Hyderabad, Telangana</p>
        </ContactItem>
        <ContactItem>
          <PhoneIcon>📞</PhoneIcon>
          <p>+91 9666 219 552</p>
        </ContactItem>
        <ContactItem>
          <EmailIcon>📧</EmailIcon>
          <p>muralikrishnarambarki13@gmail.com</p>
        </ContactItem>
      </ContactInfo>
      
        
      <SocialLinks>
   
        <SocialLink href="https://www.linkedin.com/in/murali-krishna-160962248" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon>🔗</LinkedInIcon> LinkedIn
        </SocialLink>
        {/* <SocialLink href="https://www.naukri.com/mynaukri/mn_profile" target="_blank" rel="noopener noreferrer">
          <NaukriIcon>🔗</NaukriIcon> Naukri
        </SocialLink> */}
        {/* <SocialLink href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <InstagramIcon>📸</InstagramIcon> Instagram
        </SocialLink> */}
        <SocialLink href="mailto:muralikrishnarambarki13@gmail.com">
          <EmailIcon>📧</EmailIcon> Email
        </SocialLink>
      </SocialLinks>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #ff6e7f, #bfe9ff); /* Gradient background */
  border-bottom: 1px solid #ddd;
  color: white;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const LocationIcon = styled.span`
  font-size: 1.5rem;
`;

const PhoneIcon = styled.span`
  font-size: 1.5rem;
`;

const EmailIcon = styled.span`
  font-size: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
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

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #ff6e7f;
  }
`;

const LinkedInIcon = styled.span`
  font-size: 1.5rem;
`;

const NaukriIcon = styled.span`
  font-size: 1.5rem;
`;

const InstagramIcon = styled.span`
  font-size: 1.5rem;
`;

export default Contact;
