import React, { useState, useEffect } from 'react';
import '../assets/css/universal.css'
import { Link } from 'react-router-dom';

export default function Universal() {

  return (
    <>
    <navbar
    id="navbar">
       <div className='leftNav'>
          <Link id="left-link"className="nav-link" to="https://sebastian-105.com" style={{display: 'flex', alignItems: "center", verticalAlign: 'middle', padding: '0px', backgroundColor: 'none !important'}}>
            <img src="/105.png" style={{borderRadius: '50%'}} alt="105" /> 
            <span>&nbsp;&nbsp;Sebastian</span>
          </Link>
          </div>
          <div className='centerNav'>
          <Link className="nav-link" to="/todo">Todo</Link>
          <Link className="nav-link" to="/assignmentTracker">Assignment Tracker</Link>
          <Link className="nav-link" to="/schedule">Schedule</Link>
          </div>
          {/* <div className='rightNav'>
          <Link className="nav-link" to="">
           
          </Link>
          </div> */}
    </navbar>
    <footer>
      © Sebastian Schapfel 2025
    </footer>
    
    </>
  )
}
