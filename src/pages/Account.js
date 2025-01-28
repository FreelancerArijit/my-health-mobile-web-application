// src/pages/Account.js
import React from 'react';
// import Header from '../components/Header';
import '../App.css';


function Account() {
  return (
    <div>
    <header className="account-header">
      <div className="first-row">
        <div className="image"><img src="./images/medical-icon.png" alt="" className="src" /></div>
        <div className="heading"><h1>Health App</h1> <span>Private Account</span></div>
      </div>
      <div className="second-row">
        <div className="profile-picture"><img src="./images/profile-photo.png" alt="" className="src" /></div>
        <div className="name">
          <h2>Victoria Rodrigues Munez</h2>
          <button className="btn">Edit Profile</button></div>
        
      </div>
    </header>

    <section className="account-menue">
      <ul>
        <li><img src="./images/setting.png" alt="" className="src" />Settings</li>
        <div className="line"></div>
        <li><img src="./images/files.png" alt="" className="src" />Files</li>
        <div className="line"></div>
        <li><img src="./images/help.png" alt="" className="src" />Help & Support</li>
        <div className="line"></div>
        <li><img src="./images/logout.png" alt="" className="src" />Logout</li>
      </ul>
      <p>Healthapp v1.1.2</p>
      </section>


    </div>
  );
}

export default Account;
