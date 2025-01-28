// src/pages/Care.js
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

function Care() {
  return (
    <div>
      <Header title="Care" />
      
      <Card icon={"./images/medical-consults.png"} title="Medical Consults" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to." />
      <Card icon={"./images/health-qa.png"} title="Health Q&A" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to." />
      <Card icon={"./images/care-guides.png"} title="Care Guides" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to." />
      <Card icon={"./images/search.png"} title="Search" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to." />
      <Card icon={"./images/symptoms-assesment.png"} title="Symptoms Assesment" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to." />
      <Card icon={"./images/care-team.png"} title="Your Care Team" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to." />
      



      {/* Add more care options as needed */}
    </div>
  );
}

export default Care;
