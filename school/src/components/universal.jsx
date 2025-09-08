import React, { useState, useEffect } from 'react';
import '../assets/css/universal.css'
import { Link } from 'react-router-dom';

export default function Universal() {

  return (
    <>
    <navbar
    id="navbar">
       <div className='leftNav'>
          <Link className="nav-link" to="https://sebastian-105.com">
            <img src="https://sebastian-105.com/105.png" style={{ width: '35%', height: '35%', borderRadius: '50%', marginTop:'7px'}} alt="description" />
          </Link>
          </div>
          <div className='rightNav'>
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
