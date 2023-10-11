import React from 'react'
import './App.css';

function Topbar(){
  return (
    <div>
      <header>
      <div>
          <div className="Topnav-bar">
            <a className="Top-logo-item">
                <div className="logoheading">EDYODA</div>
                <p id="logo-stories-text">Stories</p>
            </a>
            <div className="Top-items">
              <div className='TopItems1'>
              <p>Explore Categories <i class="fa-solid fa-angle-down"></i></p>
              </div>
              <div className='TopItems2'>
                <div className='Items_1'>
                <p id='item'>EdYoda is a learning and knowledge<br/> sharing platform for techies</p>
                </div>
                <div className='Items_2'>
                  <button className='btn'>Go To Main Website</button>
                </div>
              </div>
            </div>
            
          
          </div>
      </div>
      </header>

    </div>
  );
}

export default Topbar;