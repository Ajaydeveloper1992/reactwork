'use client'
import {Link } from "react-router-dom";
import React from 'react'

const Website = () => {
    return(
        <div>
            
            <div class="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="pt-16 text-center">
                    <h1 className="capitalize text-7xl font-bold max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl ">We bring execution<br />
                    with Style.</h1>
                    <p className="font-normal text-lg my-3">Digital agency that solves the complex equation: Style + Science = Success</p>
                    <Link to="#" className="mt-2 capitalize font-semibold text-xl inline-flex border border-black rounded-[18px] px-5 py-1.5 hover:bg-[#EA7A0F] hover:text-[#fff] transition">Reach Out</Link>
                
                </div>
            </div>

            <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8 pb-0">
                <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Your Co-Pilot for Impactful Website</h1>
                <p className="font-normal text-center mt-4 px-52 max-lg:px-0">Our battle-tested developers specialize in a wide range of web development services. Here are some of the solutions that we can deliver for you.</p>
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 pt-12">
                    <div className="text-center ce_website_poilet_box pb-12">
                        <span className="inline-block rounded-full p-2.5 bg-gray-200"><img alt="" src="/assets/img/website/pilot01.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Websites</h5>
                        <p>All good businesses start with a
                            well- designed and fully-functional
                            website that generates leads and
                            serves as a powerful marketing and communication tool.</p>
                    </div>
                    <div className="text-center ce_website_poilet_box pb-12">
                        <span className="inline-block rounded-full p-2.5 bg-gray-200">
                            <img alt="" src="/assets/img/website/pilot02.png" />
                        </span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Ecommerce</h5>
                        <p>With versatile ecommerce solutions,
                            your business can run at full power
                            all day and night, and bring in
                            revenue from across the globe.</p>
                    </div>
                    <div className="text-center ce_website_poilet_box pb-12">
                        <span className="inline-block rounded-full p-2.5 bg-gray-200">
                            <img alt="" src="/assets/img/website/pilot03.png" />
                        </span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Web Applications</h5>
                        <p>Interactive and engaging web
                            applications can enhance user
                            adoption and experience
                            irrespective of the location
                            they are used in.</p>
                    </div>
                    <div className="text-center ce_website_poilet_box pb-12">
                        <span className="inline-block rounded-full p-2.5 bg-gray-200">
                            <img alt="" src="/assets/img/website/pilot04.png" />
                        </span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Content<br />
                        Management System</h5>
                        <p>All good businesses start with a well-
                        designed and fully-functional website
                        that generates leads and serves as a
                        powerful marketing and communication tool.</p>
                    </div>
                </div>
            </div>

            <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
                <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Our Approach</h1>
                <p className="font-normal text-center mt-4 px-52 max-lg:px-0">Our app development process consists of the following steps</p>
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-4 max-md:gap-8 pt-12 ce_website_approach_section">
                    <div className="text-center ce_website_approach_box">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/website/approach01.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Research and analysis</h5>
                        <p className="px-6">Our team assesses the project requirements
                            and organizes a competitive analysis base
                            on the available data.</p>
                    </div>
                    <div className="text-center ce_website_approach_box">
                        <span className="inline-block rounded-full p-2.5 bg-black">
                            <img alt="" src="/assets/img/website/approach02.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Wireframing and prototyping</h5>
                        <p className="px-6">We put together black-and-white wireframes and primitive prototypes to demonstrate the user flow.</p>
                    </div>
                    <div className="text-center ce_website_approach_box ce_website_approach_box_last">
                        <span className="inline-block rounded-full p-2.5 bg-black">
                            <img alt="" src="/assets/img/website/approach03.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">UI and UX design</h5>
                        <p className="px-6">Once the prototype gets the nod, we infuse the project design with more details and start to perfect it.</p>
                    </div>
                    <div className="text-center ce_website_approach_box">
                        <span className="inline-block rounded-full p-2.5 bg-black">
                            <img alt="" src="/assets/img/website/approach04.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Development and review</h5>
                        <p className="px-6">Consistent code reviews are conducted throughout the application development process.</p>
                    </div>
                    <div className="text-center ce_website_approach_box">
                        <span className="inline-block rounded-full p-2.5 bg-black">
                            <img alt="" src="/assets/img/website/approach05.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Testing and bug-fixing</h5>
                        <p className="px-6">We stay meticulous about both manual and automated testing to address all bugs before launching the app.</p>
                    </div>
                    <div className="text-center ce_website_approach_box ce_website_approach_box_last">
                        <span className="inline-block rounded-full p-2.5 bg-black">
                            <img alt="" src="/assets/img/website/approach06.png" /></span>
                        <h5 className="text-2xl mt-3 mb-3 font-semibold">Maintenance and support</h5>
                        <p className="px-6">Post release, we collect user feedback and make adjustments to optimize performance.</p>
                    </div>
                </div> 
            </div>       

            <div className="bg-[#e4e4e4] mb-[100px]">
        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">TESTIMONIALS</h1>
            <h2 className="text-4xl font-bold text-center capitalize mt-4">WHAT OUR CLIENTS SAY</h2>
            <p className="font-normal text-center mt-4 px-[9rem] max-lg:px-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.</p>

            <div className="flex pt-12 px-40 max-lg:px-20 max-md:px-0 max-sm:flex-col">
                <div className="ce_testi_img basis-1/6 flex items-center max-sm:block max-sm:text-center">
                    <img alt="" src="assets/img/client1.png" />
                </div>
                <div className="basis-5/6 ml-6">
                    <img alt="" src="assets/img/colon.png" />
                    <p className="font-medium text-[16px] pt-3 pb-5 pr-36 max-lg:pr-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an<br />
                    unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <h3 className="font-bold text-[20px] leading-[18px] uppercase">gautam singh<br />
                        <span className="font-normal text-[12px]">GRAPHIC DESIGNER</span>
                    </h3>
                </div>
            </div>
        </div> 
        </div>

        </div>
        );
  };
export default Website