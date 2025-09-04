import React, { useState, useEffect } from 'react';
import '../assets/css/universal.css'
import { Link } from 'react-router-dom';

export default function Universal() {

  return (
    <>
    <navbar
    id="navbar">
       
          <Link className="nav-link" to="https://sebastian-105.com">
            asd 
          </Link>
    </navbar>
    <footer>
      © Sebastian Schapfel 2025
    </footer>
    
    </>
  )
}
