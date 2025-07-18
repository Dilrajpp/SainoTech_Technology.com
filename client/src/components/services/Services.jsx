import React from "react";
import webimg1 from './webimg1.png';
import webimg2 from './webimg2.png';
// import webimg3 from './webimg3.png';
// import webimg4 from './webimg4.png';
import webimg5 from './webimg5.png';
// import webimg6 from './webimg6.png';
// import webimg7 from './webimg7.png';
// import webimg8 from './webimg8.jpg';
// import webimg9 from './webimg9.jpg';






const Services = () => {
    return (
        <>
            <div className="services container-fluid bg-primaryddddd">
                <div className="services1 container bg-infodddd">
                    <h3 className="text-center Our-Services">Our Services</h3>
                    <hr className='hori' />
                    <p className="text-center"><small className="text-secondary">SainoTech Technologies provide wide range of service from development to digital marketing. Here is our list of service</small></p>

                    <div class="row row-cols-3 row-cols-md-3 g-4">
                        <div class="col border-rounded">
                            <div class="card services-cards border-0 border-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="services-icon mt-4 ms-3" width="16" height="16" fill="currentColor" class="bi bi-activity services-icon mt-4 ms-3" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                            </svg>
                            <div class="card-body">
                                <h6 class="card-title"><b>Website Development</b></h6><hr className="hori-services1" />
                                <p class="card-text"><small>From business wevsite to ecommerce website development, we do all. We use wordpress, node.js, react.js, majento, wocommerce development</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card services-cards border-0 border-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="services-icon mt-4 ms-3" width="16" height="16" fill="currentColor" class="bi bi-broadcast services-icon mt-4 ms-3" viewBox="0 0 16 16">
                                <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                            </svg>
                            <div class="card-body">
                                <h6 class="card-title"><b>Mobile App Development</b></h6><hr className="hori-services2" />
                                <p class="card-text"><small>Do you want to sell morw with existing customers? Well, you can  do that with mobile app developedby us. We do both android and ios app development for business</small></p>

                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card services-cards border-0 border-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="services-icon mt-4 ms-3" width="16" height="16" fill="currentColor" class="bi bi-easel services-icon mt-4 ms-3" viewBox="0 0 16 16">
                                <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z"/>
                            </svg>
                            <div class="card-body">
                                <h6 class="card-title"><b>Digital Marketing</b></h6><hr className="hori-services3" />
                                <p class="card-text"><small>Do you want to generate more revenue for your business with more leads & sales. We help business with SEO, google ads, facebook, instagram & linkedin ads</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card services-cards border-0 border-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="services-icon mt-4 ms-3" width="16" height="16" fill="currentColor" class="bi bi-code-square services-icon mt-4 ms-3" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
                            </svg>
                            <div class="card-body">
                                <h6 class="card-title"><b>Ecommerce Website Development</b></h6><hr className="hori-services1" />
                                <p class="card-text"><small>Whether it is branded shopify store, wocommerce, majento or customized ecom web app on node.js we build it for you</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card services-cards border-0 border-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="services-icon mt-4 ms-3" width="16" height="16" fill="currentColor" class="bi bi-window-dock services-icon mt-4 ms-3" viewBox="0 0 16 16">
                                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                                <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1z"/>
                            </svg>
                            <div class="card-body">
                                <h6 class="card-title"><b>Zoho ERP</b></h6><hr className="hori-services5" />
                                <p class="card-text"><small>Do you want to implement ERP with automation to monitor reports, sales, employees & provide trainig to use the tools to fullest</small></p>
                                {/* & track business metric? We help yo setup entire zoho business suit */}
                            </div>
                            </div>
                        </div>
                        <div class="col border-0">
                            <div class="card services-cards border-0 border-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="services-icon mt-4 ms-3" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text services-icon mt-4 ms-3" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <div class="card-body">
                                <h6 class="card-title"><b>Odoo ERP</b></h6><hr className="hori-services5" />
                                <p class="card-text"><small>Do yuou want to have on-premise ERP? We help develop, customize, setup & provide training for Odoo ERP for your business</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


                                     {/* Testimonials */}
        <div className="Testimonials container">
                <div className="Testimonials1 container-fluid h-50 w-75">
                    <h3 className="text-center Our-Services">Testimonials</h3>
                    <hr className='hori' />
                    <p className="text-center"><small className="text-secondary">Let Us here whats our costomers say</small></p>

                    <div class="row row-cols-3 row-cols-md-3 g-4 ms-5">
                        <div class="col Testimonials-cards">
                            <div class="card Testimonials-cards1 shadow-sm p-3 mb-5 bg-body-tertiary rounded  border-0 rounded">
                                <div className="">
                                 <img className="Virat-img rounded-circle" src="https://media.licdn.com/dms/image/C5603AQF_P6huxo_Wdw/profile-displayphoto-shrink_200_200/0/1635231022612?e=2147483647&v=beta&t=VCZw2ZSyV-Z858uaYIBZDuSXawpwCSU2IFhJL22QWrY" alt="" />
                                 <div className="Virat-name ms-5 ps-5">
                                    <h6 className=""><b>Deepti Sharma</b></h6>
                                    <small className=""><small>Head of Marketing & Chanakya IAS Academy</small></small><br />
                                    <h3> <b className="text-info">*****</b> </h3>
                                 </div>
                                </div>             
                            <div class="card-body">
                                <p class="card-text"><small><i><small><span className="text-info quarter"><b>"</b></span>SainoTech Technologies helped us with online marketing to get more students enrollment for our cricket club business. Thanks for their Zoho suggestion which helped us to autoonate sales process & focus on business more.</small></i></small></p>
                            </div>
                            </div>
                        </div>

                        <div class="col Testimonials-cards">
                            <div class="card Testimonials-cards1 shadow-sm p-3 mb-5 bg-body-tertiary rounded  border-0">
                                <div className="">
                                 <img className="Virat-img rounded-circle" src="https://media.licdn.com/dms/image/C4D03AQHlJxXzTvIznQ/profile-displayphoto-shrink_200_200/0/1663691643765?e=2147483647&v=beta&t=PgA4KTnoxZ4sdgoCQYJmJrUZAZaUqPmejdvIXaBeXhs" alt="" />
                                 <div className="Virat-name ms-5 ps-5">
                                    <h6 className=""><b>Roy Zdretch</b></h6>
                                    <small className=""><small>Founder - ADX</small></small><br />
                                    <h3> <b className="text-info">*****</b> </h3>
                                 </div>
                                </div>             
                            <div class="card-body">
                                <p class="card-text"><small><i><small>"We needed a professional website for our music business with top class branding. <br />SainoTech Technologies has done a wonderful job portraying our brand in a such an amazing way using their UI/UX design skills."</small></i></small></p>
                            </div>
                            </div>
                        </div>

                        <div class="col Testimonials-cards">
                            <div class="card Testimonials-cards1 shadow-sm p-3 mb-5 bg-body-tertiary rounded  border-0">
                                <div className="">
                                 <img className="Virat-img rounded-circle" src="https://media.licdn.com/dms/image/C5103AQFc8rx_f0k6iA/profile-displayphoto-shrink_200_200/0/1516528576053?e=2147483647&v=beta&t=vVjluuqQBMGoSJNYimX6V47C2PrmjWRQEHOKxP-ca68" alt="" />
                                 <div className="Virat-name ms-5 ps-5">
                                    <h6 className=""><b>Haris</b></h6>
                                    <small className=""><small>Sales Head - Aaron Cleantech</small></small><br />
                                    <h3> <b className="text-info">*****</b> </h3>
                                 </div>
                                </div>             
                            <div class="card-body">
                                <p class="card-text"><small><i><small><span><b className="text-info quarter">"</b></span>SainoTech Technologies delivered our professional loking business website within 7 days in such a short timeline. SainoTech Technologies quick response & delivery."</small></i></small></p>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>



                                                        {/* Portfolio */}
        <div className="Portfolio container-fluid">
                <div className="Portfolio1">
                    <h3 className="text-center Our-Services">Portfolio</h3>
                    <hr className='hori' />
                    <p className="text-center"><small className="text-secondary">Here is some of the websites we have worked on</small></p>
                    <span className=" text-center"><h6><span className="text-info">All</span> Website</h6></span>

                    <div class="row row-cols-4 row-cols-md-3 g-2 ms-2">
                        <div class="col border rounded bg-white">
                            <img className="w-100 h-75 rounded" src={webimg1} alt="webimg1" />
                            <h6 className="ms-2"> <strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Dashboard</p>
                        </div>
                        <div class="col border rounded bg-white">
                            <img className="w-100 h-75 rounded" src={webimg2} alt="webimg2" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Luns Pa Dora</p>
                        </div>
                        <div class="col border rounded bg-white">
                            <img className="w-100 h-75 rounded" src="https://s.tmimgcdn.com/scr/1200x627/104800/bindas-consulting-amp-business-landing-page-template_104836-original.png" alt="webimg3" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Bindas</p>
                        </div>
                        <div class="col border rounded bg-white">
                            <img className="w-100 h-75 rounded" src="https://www.codester.com/static/uploads/items/000/041/41552/preview.jpg" alt="webimg4" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Raju</p>
                        </div>
                        <div class="col border rounded bg-white">
                            <img className="w-100 h-75 rounded" src={webimg5} alt="webimg5" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Eylyer</p>
                        </div>
                        <div class="col border rounded bg-white">
                            <img className="w-100 h-75 rounded"src="https://themewagon.com/wp-content/uploads/2022/05/screencapture-technext-github-io-multishop-2022-05-10-12_41_20-2.png" alt="webimg6" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">MultiShop</p>
                        </div>
                        <div class="col border rounded h-25 bg-white">
                            <img className="w-100 h-75 rounded" src="https://www.templateshub.net/uploads/1537207366electrothumb.jpg" alt="webimg9" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Electro.</p>
                        </div>
                        <div class="col border rounded h-25 bg-white">
                            <img className="w-100 h-75 rounded" src="https://themefisher.com/blog/flatastic.webp" alt="webimg8" />
                            <h6 className="ms-2"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Flatastic</p>
                        </div>
                        <div class="col border rounded h-25 bg-white">
                            <img className="w-100 h-75 rounded" src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg" alt="webimg9" />
                            <h6 className="ms-2 mt-3"><strong>Websites</strong></h6>
                            <p className="pb-1 ms-2 text-secondary">Eylyer</p>
                        </div>
                    </div>
                </div>
        </div>
        </>

    )

}


export default Services;