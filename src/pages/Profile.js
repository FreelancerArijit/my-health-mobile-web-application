// src/pages/Profile.js
import React from 'react';
//import Header from '../components/Header';
//import Card from '../components/Card';
import '../App.css';


function Profile() {
  return (
   <div>
     <div className="profile-home">
      <div className="row-notification"><img src="images/bell-icon.png" alt="" className="src" /> </div>

      <div className="row-main">
        <div className="col-text">
          <div className="row-heading text-white font-bold"><h1>Hi Victoria,</h1></div>
          <div className="row-info">
            <div className="first-row"> 
              <span>You have</span> <div className="task"> <div className="circle">99</div> Tasks</div>
              </div>           
           <div className="second-row">
            <span>and </span> <div className="appoinments"><div className="circle">99</div> Appoinments</div>
           </div>
       
          </div>

          </div>

          <div className="col-image">        
            <img src="images/profile-photo.png" alt="" className="src" />
          </div>
        
      </div>
      <div className="searchbar">  
      <p>Coming up today</p>   
        <img src="./images/search-icon.png" alt="" className="src" />
        <input type="text" name="search" id="search" placeholder="Search Doctors, Hospitals & More" />
      </div>
    </div>


    <section className="shortcut">
      <div className="title">Shortcut</div>
      <div className="card-item">
        <div className="card-item-row">
        <div className="cards">
          <div className="img">
          <img src="./images/Group 29.png" alt="" className="src" />
          </div>        
        <div><h2>Access my symptoms</h2></div>        
        </div>
        <div className="cards">
          <div className="img">
          <img src="./images/Group 27.png" alt="" className="src" />
          </div>
        <div><h2>Talk to a Doctor</h2></div>        
        </div>
        </div>
        <div className="card-item-row">
        <div className="cards">
          <div className="img">
          <img src="./images/Group 28.png" alt="" className="src" />
          </div>
        <div><h2>Access my symptoms</h2></div>        
        </div>
        <div className="cards">
          <div className="img">
          <img src="./images/Group 20.png" alt="" className="src" />
          </div>
        <div><h2>Talk to a Doctor</h2></div>
        </div>
       
        </div>

      </div>
    </section>

    



     
  
   
   </div>
  );
}

export default Profile;
