// import React from "react";
import axios from "axios";
import React, { useState } from 'react';


const Contact = () => {

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


    const res = await axios.post("http://localhost:5000/api/contact",
        // {
        // name: formData.name,
        // email: formData.email,
        // number: formData.number,
        // message: formData.message,
        // },
        formData,
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




    return (
        <>
                                                {/* Contact*/}
            <div className="Contact mt-3">
                <div className="Contact1">
                    <h3 className="text-center Our-Services">Contact</h3>
                    <hr className='hori' />
                    <p className="text-center"><small className="text-secondary">Contact us by filling the from below</small></p>
                    <div className="Contact-cards">
                        <div className="float-right rounded location">

                            <div className="locatA rounded">
                            <div className="location-icon rounded-circle mt-3 ms-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt text-white rounded-circle mt-1 location-icon1" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            </div>
                                <div className="locatA1 text-white "><b>Location</b></div>
                                <div className="locatA2 text-white "><small><small>TwinSoft Technologies R-22, 3rd Cross, Nash Square, 1st Floor, above Canara Bank, opp, Prathik Tech Park Electronic City Phase 1, Electronic City, Bengaluru, Karnataka 560100</small></small></div>
                            </div>

                            <div className="locatB rounded">
                            <div className="location-icon rounded-circle mt-3 ms-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope text-white rounded-circle mt-1 location-icon1" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                            </svg>
                            </div>
                                <div className="locatA1 pt-2 text-white "><b>Email</b></div>
                                <div className="locatA2 text-white "><small><small>dilrajpp77@gmail.com</small></small></div>
                            </div>

                            <div className="locatB rounded">
                            <div className="location-icon rounded-circle mt-3 ms-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone text-white rounded-circle mt-1 location-icon1" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            </div>
                                <div className="locatA1 pt-2 text-white "><b>Call:</b></div>
                                <div className="locatA2 text-white "><small><small>+917089767154</small></small></div>
                            </div>

                            <div className="locatB rounded">
                            <div className="location-icon rounded-circle mt-3 ms-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock rounded-circle mt-1 text-white location-icon1" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                            </svg>
                            </div>
                                <div className="locatA1 text-white pt-2"><b>Open Hours:</b></div>
                                <div className="locatA2 text-white"><small><small>Mon-Sat: 9AM -6 PM</small></small></div>
                            </div>
                        </div>

                        
                        {/* <div className="bg-light border send-message">
                            <div class="input-group mt-2 mb-3">
                                <input type="text" class="form-control mt-3 ms-5" placeholder="Your Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <input type="text" class="form-control mt-3 ms-3 me-2" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> *f/}
                            </div>
                            <div class="input-group mt-2 mb-3">
                                <input type="text" class="form-control mt-3 ms-5 me-2" placeholder="Youe Phone Number" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            </div>
                            <div class="input-group mt-2 mb-3 h-25">
                                <input type="text" class="form-control mt-3 ms-5 me-2" placeholder="Message" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            </div>
                            <div class="input-group mt-2 ms-5 mb-3 ps-5">
                            <div className="text-center ms-5 ps-5">
                                <button class="btn btn-outline-secondaryNNNNNN text-center mt-1 ms-5 bg-info text-white" type="button" id="button-addon2">Send Message</button>
                            </div>
                            </div>
                        </div> */}

                        <div className="bg-light border send-message">
                        <form onSubmit={handleSubmit}>
                            <div className='mb-1 input-group mt-2 mb-3'>
                                <label className='float-start ms-5 ps-2 text-success' htmlFor="name">Enter Your Name</label>
                                <input
                                    type="text"
                                    className="form-control ms-5 pe-1"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-1 input-group mt-2'>
                                <label className='float-start ms-5 ps-2 text-success' htmlFor="exampleInputEmail1">Enter Email address</label>
                                <input
                                    type="email"
                                    className="form-control ms-4 ps-2 pe-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-1 mt-2'>
                                <label className='float-start ms-5 ps-2 text-success pe-2' htmlFor="phone">Enter 10 Digit Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control ms-2 w-50"
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
                            <div className='mb-1 input-group mt-2 mb-3 w-75 ms-5'>
                                <label className='float-start ps-2 text-success me-5 pe-3' htmlFor="message">Message</label>
                                <input
                                    type="text"
                                    className="form-control w-50 ms-5 ps-4"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className='mt-3 bg-info ms-5 w-75 ps-2 border rounded text-light'
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
                </div>
            </div>




                                    {/* Footer */}
            <div class="container -fluid h-100 mt-5 mb-5 bg-info">
                <div class="row pt-2">
                    <div class="col-6 col-md-4 text-light ps-5">
                        <h4 className="ps-3">SainoTech Technologies</h4>
                        <p className="ps-3"><small>SainoTech Technologies aims to help your business by providing wide range of service such as website, ecom, mobile app development, branding & ERP implementation service</small></p>
                        <div className='icon ps-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x ms-4" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram ms-4" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-broadcast-pin ms-4" viewBox="0 0 16 16">
                                <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8"/>
                            </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eyeglasses ms-4" viewBox="0 0 16 16">
                                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                            </svg> */}
                                {/* <Facebook />
                                <Twitter />
                                <Instagram />
                                <Broadcast />
                                <Eyeglasses /> */}
                                    {/* <i class="bi bi-facebook"></i>
                                    <i class="bi bi-twitter"></i>
                                    <i class="bi bi-instagram"></i>
                                    <i class="bi bi-broadcast"></i>
                                    <i class="bi bi-eyeglasses"></i> */}
                        </div>
                    </div>
                    <div class="col-6 col-md-4 bg-info">
                    <ul class="list-group float-start ps-4 pb-2 bg-info w-50 text-light list-borderless">
                        <li class="list-group-item text-light bg-info ps-5 border-0"><strong>Useful Links</strong></li>
                        <li class="list-group-item bg-info text-light ps-5 border-0">Home</li>
                        <li class="list-group-item bg-info text-light ps-5 border-0">About US</li>
                        <li class="list-group-item bg-info text-light ps-5 border-0">Services</li>
                        <li class="list-group-item bg-info text-light ps-5 border-0">Terms of service</li>
                        <li class="list-group-item bg-info text-light ps-5 border-0">Privacy policy</li>
                    </ul>
                    <ul class="list-group float-end bg-info w-50 text-light list-borderless">
                        <li class="list-group-item text-light bg-info border-0"><strong>Our Services</strong></li>
                        <li class="list-group-item bg-info text-light border-0">Web Design</li>
                        <li class="list-group-item bg-info text-light border-0">Web Development</li>
                        <li class="list-group-item bg-info text-light border-0">Product Management</li>
                        <li class="list-group-item bg-info text-light border-0">Marketing</li>
                        <li class="list-group-item bg-info text-light border-0">Graphic Design</li>
                    </ul>
                    </div>
                    <div class="col-6 col-md-4 text-light">
                        <h6 className=""><b>Contact Us</b></h6>
                        <p className="mt-3"><small>R-22 3rd Cross Nash Square, 1st Floor, above <br /> Canara Bank opp. <br />Prathik Tech Park, Electronic City Phase1, <br /> Electronic City, Bengaluru, Karanataka 560100 <br /><b>Phone:</b> <small>+917089767154</small><br /><b>Email:</b> <small>dilrajpp77@gmail.com</small></small></p>
                    </div>
                </div>
                <div className="text-center pb-2 text-light">Copyright <b>SainoTech Technologies.</b>All Right Reserved</div>
            </div>
        </>



)

}

export default Contact ;