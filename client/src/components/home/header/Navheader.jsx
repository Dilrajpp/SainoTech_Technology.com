
// import'../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// style="width: 6rem;"

const Navheader = () => {
    return (
        <>
                                              {/* bg-body-tertiary */}
            <nav class="navbar navbar-expand-lg"> 
              <div class="container">
                <div>
                  <img className="hed1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaRqHJXAUPxw7BtocQD11I7EQCIJqvEVo0A&s" alt="logo" />
                  <h2 className="hed2 float-left text-white">SainoTech Technologies</h2>
                </div>
                <div class="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
                  <ul class="navbar-nav ms-5 ps-5">
                    <li class="nav-item ms-5 ps-5">
                      <button class="nav-link active ms-5 ps-5  text-white float-end" aria-current="page" href="#Home">Home</button>
                    </li>
                    <li class="nav-item ms-3">
                      <button class="nav-link text-white" href="#About">About</button>
                    </li>
                    <li class="nav-item ms-3">
                      <button class="nav-link text-white" href="#Services">Services</button>
                    </li>
                    <li class="nav-item ms-3">
                      <button class="nav-link text-white" href="#Project">Project</button>
                    </li>
                    <li class="nav-item ms-3">
                      <button class="nav-link disabled text-white" aria-disabled="true" href="#Team">Team</button>
                    </li>
                    <li class="nav-item ms-3">
                      <button class="nav-link disabled text-white" aria-disabled="true" href="#Contact">Contact</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

        </>
    )
}


export default Navheader;

