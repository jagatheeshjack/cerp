import React, { useState } from 'react';
// Make sure to import Resume component

const ToggleTabs = ({ activeTabIndex, setActiveTabIndex }) => {

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  }
  return (
      <nav id="navbar" className="nav-menu navbar">
          <ul>
              {/* Define each tab separately */}
              <li>
                  <a
                      href="#"
                      className={`nav-link scrollto ${activeTabIndex === 0 ? 'active' : ''}`}
                      onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(0);
                      }}
                  ><i className="bx bx-home"></i> <span>Home</span>
                      
                  </a>
              </li>
              <li>
                  <a
                      href="#"
                      className={`nav-link scrollto ${activeTabIndex === 1 ? 'active' : ''}`}
                      onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(1);
                      }}
                  ><i className="bx bx-user"></i> <span>About</span>

                  </a>
              </li>
              <li>
                  <a
                      href="#"
                      className={`nav-link scrollto ${activeTabIndex === 2 ? 'active' : ''}`}
                      onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(2);
                      }}
                  >
                      <i className="bx bx-file-blank"></i> <span>Resume</span>
                  </a>
              </li>
              <li>
                  <a
                      href="#"
                      className={`nav-link scrollto ${activeTabIndex === 3 ? 'active' : ''}`}
                      onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(3);
                      }}
                  >
                       <i className="bx bx-book-content"></i> <span>Portfolio</span>
                  </a>
              </li>
              <li>
                  <a
                      href="#"
                      className={`nav-link scrollto ${activeTabIndex === 4 ? 'active' : ''}`}
                      onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(4);
                      }}
                  >
                      <i className="bx bx-server"></i> <span>Services</span>
                  </a>
              </li>
              <li>
                  <a
                      href="#"
                      className={`nav-link scrollto ${activeTabIndex === 5 ? 'active' : ''}`}
                      onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(5);
                      }}
                  >
                      <i className="bx bx-envelope"></i> <span>Contact</span>
                  </a>
              </li>
          </ul>
      </nav>
  );
};
export default ToggleTabs;
