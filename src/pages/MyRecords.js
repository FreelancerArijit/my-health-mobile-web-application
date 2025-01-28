// src/pages/MyRecords.js
import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

function MyRecords() {
  return (
    <div>
       <Header title={"My Records"} />

       

<section className="records-menue">
      <ul>
        <li><img src="./images/health-matrices.png" alt="" className="src" />Health  Matrices</li>
        <div className="line"></div>
        <li><img src="./images/condition-symptoms.png" alt="" className="src" />Conditions & Symptoms</li>
        <div className="line"></div>
        <li><img src="./images/medications.png" alt="" className="src" />Medications</li>
        <div className="line"></div>
        <li><img src="./images/allergies.png" alt="" className="src" />Allergies</li>
        <div className="line"></div>
        <li><img src="./images/treatement.png" alt="" className="src" />Treatement & Procedure</li>
        <div className="line"></div>
        <li><img src="./images/vaccination.png" alt="" className="src" />Vaccinations</li>
        <div className="line"></div>
        <li><img src="./images/lab-test.png" alt="" className="src" />Lab Test Result</li>
        <div className="line"></div>
        <li><img src="./images/lifestyle.png" alt="" className="src" />Lifestyles</li>
        <div className="line"></div>
        <li><img src="./images/pregnency.png" alt="" className="src" />Pregnency</li>
        <div className="line"></div>
        <li><img src="./images/pharmecy.png" alt="" className="src" />Preffered Pharmacy</li>


      </ul>   
      </section>


      





    </div>
  );
}

export default MyRecords;
