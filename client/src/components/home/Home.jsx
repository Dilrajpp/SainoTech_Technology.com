// import React from "react";
import Navheader from './header/Navheader'
import About from "../about/About";
import Services from '../services/Services';
import Teamate from '../team/Teamate';
import Contact from '../contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../home/css/twin.css';
import axios from "axios";
// import  'bootstrap-icons-react';
// import { Facebook, Twitter, Instagram, Broadcast, Eyeglasses } from 'bootstrap-icons-react';




import React, { useState } from 'react';

const Home = () => {
            // New code
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',   // <- use `number` to match backend
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, ok: null, message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    // basic client-side checks
    if (!formData.name || !formData.email || !formData.number || !formData.message) {
      setStatus({ loading:false, ok:false, message: 'All fields are required.' });
      return false;
    }
    if (formData.number.length !== 10) {
      setStatus({ loading: false, ok: false, message: "Phone number must be 10 digits" });
    // if (!/^\d{10}$/.test(formData.number)) {
    //   setStatus({ loading:false, ok:false, message: 'Phone number must be exactly 10 digits.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading:false, ok:null, message: '' });

    if (!validate()) return;

    try {
      setStatus({ loading:true, ok:null, message: 'Sending...' });

    //   const res = await axios.post('http://localhost:5000/api/contact',
    //     formData, //changes host form data
    //     {
    //     // method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     // body: JSON.stringify(formData)
    //   });

    const res = await axios.post("http://localhost:5000/api/contact",
        {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
        },
        {
        headers: { "Content-Type": "application/json" }
        }
    );

      const data =  res.data;
      console.log("Backend Response:", data);

      if (data.error) {
        // show server error message if any
        setStatus({ loading:false, ok:false, message: data.error || 'Server error' });
        return;
      }

      // success
      setStatus({ loading:false, ok:true, message: 'Message sent — thank you!' });
      setFormData({ name:'', email:'', number:'', message:'' });

      console.log("Backend Response:", data);
    } catch (err) {
      console.error('Axios error:', err);
      setStatus({ loading:false, ok:false, message: 'Network error — try again.' });
    }
  };



            // previous
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     // phone: ''
//     number: '', //1st changes
//     message: '' //2nd changes
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform further actions here, like sending the data to a server
//     console.log(formData);
//   };


// const Home = () => {
   
    return (
        <>
            
            <div className="Digitalbanner container-fluid banner" id="Home">
                <div className="hed"><Navheader /></div>
                <div className="welcome-page grid">
                    <div className="welcome-page1 float-left g-col-6">
                        <h1 className="text-white">Welcome to SainoTech Technologies</h1>
                        <h6 className="mt-3 price">Get your Business Personal and Eccommerce Website done in 7 days with SainoTeach Technologies</h6>
                        <div className='button1'><button class="btn btn-outline-secondaryNNNNNN text-center mt-3 bg-info text-white w-25" type="button" id="button-addon2">Get Started</button></div>
                    </div>
                    <div className="get-website g-col-6 bg-light border border-info rounded">
                        <h6 className='web-running ms-5 ps-5 text-decoration-underline text-info'>
                            Get Your Ecommerce Website Up & Running in 7 Days
                        </h6>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-1'>
                                <label className='float-start ms-5 ps-2 text-success' htmlFor="name">Enter Your Name</label>
                                <input
                                    type="text"
                                    className="form-control ms-5 text-info"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-1'>
                                <label className='float-start ms-5 ps-2 text-success' htmlFor="exampleInputEmail1">Enter Email address</label>
                                <input
                                    type="email"
                                    className="form-control ms-5 text-info"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-1'>
                                <label className='float-start ms-5 ps-2 text-success' htmlFor="phone">Enter 10 Digit Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control ms-5 text-info"
                                    id="number"
                                    name="number"
                                    // placeholder="Enter 10 digit phone number"
                                    maxLength="10"
                                    pattern="\d{10}"
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-1'>
                                <label className='float-start ms-5 ps-2 text-success' htmlFor="message">Message</label>
                                <input
                                    type="text"
                                    className="form-control ms-5 text-info"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className='mt-2 bg-info ms-5 w-100 border rounded text-light'
                            type="submit"
                            disabled={status.loading}
                            >
                                {status.loading ? 'sending...' : 'Submit'}
                            </button>
                            <div style={{ marginTop: 8, marginLeft: 20 }}>
                                {status.ok === true && <div style={{color:'green'}}>{status.message}</div>}
                                {status.ok === false && <div style={{color:'red'}}>{status.message}</div>}
                            </div>
                            {/* button some changes and under button added new div */}
                        </form>
                    </div>
                </div>
                <div className="Cardagent grid ">
                    <div class="row row-cols-1 row-cols-md-3 g-4 card1">
                        <div class="col card1A rounded">
                            <div class="card1B">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className='rupya' width="16" height="16" fill="currentColor" class="bi bi-currency-rupee rupya" viewBox="0 0 16 16">
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                                </svg>
                                <i class="bi bi-currency-rupee"></i>
                                <div class="card-body">
                                    <h5 class="card-title mt-2 text-white trans">Transperant <br />Pricing</h5>
                                    <p class="card-text mt-3 me-2 price">Pricing starts from Rs 29999/-. Check more on pricing below</p>
                                </div>
                            </div>
                        </div>
                        <div class="col card1A rounded">
                            <div class="card1B">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className='day07' width="16" height="16" fill="currentColor" class="bi bi-7-circle-fill day07" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11h3.972v.07L6.025 12H7.42l3.258-6.85V4.002H5.369v1.107Z"/>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title mt-2 text-white trans">7 Day Website <br />Delivery</h5>
                                <p class="card-text price mt-3 me-3">Our Expert Team delivers complete website within 7 days</p>
                            </div>
                            </div>
                        </div>
                        <div class="col float-left card1A rounded">
                            <div class="card1B">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <svg xmlns="http://www.w3.org/2000/svg"  className='hosting' width="16" height="16" fill="currentColor" class="bi bi-database-fill hosting" viewBox="0 0 16 16">
                                <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
                                <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                                <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                                <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title mt-3 text-white trans">Free Hosting</h5>
                                <p class="card-text mt-4 me-2 price">You will get 1 year free hosting for Websites developed by us</p>
                            </div>
                            </div>
                        </div>
                        <div class="col card1A rounded">
                            <div class="card1B">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <svg xmlns="http://www.w3.org/2000/svg"  className='Quick-call' width="16" height="16" fill="currentColor" class="bi bi-headset Quick-call" viewBox="0 0 16 16">
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
                            </svg>
                            <div class="card-body">
                                <h5 class="card-title mt-2 text-white trans">Quick <br />Support</h5>
                                <p class="card-text mt-2 price">You can reach out to us <br />anytime to resolve issues</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Services />
            <Teamate />
            <Contact />
            
            
                

            
        </>
    )
}

export default Home
