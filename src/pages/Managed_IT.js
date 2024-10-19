'use client'
import {Link } from "react-router-dom";
import React from 'react'

const Managed_IT = () => {
    return(
        <div>
       <div className="max-lg:block">
       <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 max-lg:block">
            <div className="order-last basis-1/3 max-lg:basis-3/3 place-items-center max-lg:place-items-center max-md:place-items-center max-sm:place-items-center grid">
                    <img className="float-right" alt="" src="/assets/img/it/it_banner.png" />
            </div>
            <div className="pb-12 pt-12 basis-2/3 max-lg:basis-3/3 max-lg:order-last max-sm:order-last max-md:text-center max-sm:text-center max-lg:text-center">
                <h1 className="capitalize text-5xl font-bold leading-[65px] max-xl:text-4xl max-lg:text-4xl max-md:text-3xl max-sm:text-3xl ">IT solutions that save you<br />time and money</h1>
                <p className="text-lg font-normal my-3">Efficiently optimize your sales and marketing with our automation services,
                saving valuable time and resources</p>
                <Link to="#" className="mt-2 capitalize font-semibold text-xl inline-flex border border-white rounded-[18px] px-5 py-1.5 bg-[#EA7A0F] hover:bg-[#000] text-[#fff] transition">Get In Touch</Link>
            </div>
            
        </div>
        </div>

        <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Our Capabilities</h1>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 pt-12 gap-8 max-lg:gap-4">
                <div className="ce_it_cap_box rounded-[30px] shadow-lg bg-black">
                    <div className="text-center ce_it_cap_box_show">
                        <img className="inline-block" alt="" src="/assets/img/it/it_cap01.png" />
                        <h3 className="text-white text-2xl mt-4 mb-3 font-semibold max-lg:text-xl">Cloud Management</h3>
                    </div>
                    <div className="text-left ce_it_cap_box_hover">
                        <img className="inline-block" alt="" src="/assets/img/it/it_cap01.png" />
                        <h3 className="text-left text-white text-2xl mb-3 font-semibold max-lg:text-xl">Cloud Management</h3>
                        <p className="mb-3 text-white">We help you build confidence in your cloud ecosystem to drive innovation, empower your workforce, and manage risk.</p>
                        <ul className="text-white group-hover:text-left">
                            <li>1. Onprem to Cloud migration</li>
                            <li>2. Application migration to cloud</li>
                            <li>3. Serverless computing consultation</li>
                            <li>4. Cost optimization consultation</li>
                            <li>5. Cloud security</li>
                            <li>6. Monitoring and fine tuning of critical metrics</li>
                            <li>7. Performance Monitoring</li>
                        </ul>
                    </div>
                </div>
                <div className="ce_it_cap_box rounded-[30px] shadow-lg bg-black">
                    <div className="text-center ce_it_cap_box_show">
                        <img className="inline-block" alt="" src="/assets/img/it/it_cap01.png" />
                        <h3 className="text-white text-2xl mt-4 mb-3 font-semibold max-lg:text-xl">Firewall & Security</h3>
                    </div>
                    <div className="text-left ce_it_cap_box_hover">
                        <img className="inline-block" alt="" src="/assets/img/it/it_cap01.png" />
                        <h3 className="text-left text-white text-2xl mb-3 font-semibold max-lg:text-xl">Firewall & Security</h3>
                        <p className="mb-3 text-white">We help you build confidence in your cloud ecosystem to drive innovation, empower your workforce, and manage risk.</p>
                        <ul className="text-white group-hover:text-left">
                            <li>1. Onprem to Cloud migration</li>
                            <li>2. Application migration to cloud</li>
                            <li>3. Serverless computing consultation</li>
                            <li>4. Cost optimization consultation</li>
                            <li>5. Cloud security</li>
                            <li>6. Monitoring and fine tuning of critical metrics</li>
                            <li>7. Performance Monitoring</li>
                        </ul>
                    </div>
                </div>
                <div className="ce_it_cap_box rounded-[30px] shadow-lg bg-black">
                    <div className="text-center ce_it_cap_box_show">
                        <img className="inline-block" alt="" src="/assets/img/it/it_cap02.png" />
                        <h3 className="text-white text-2xl mt-4 mb-3 font-semibold max-lg:text-xl">Email Data Archive
                        and Migration</h3>
                    </div>
                    <div className="text-left ce_it_cap_box_hover">
                        <img className="inline-block" alt="" src="/assets/img/it/it_cap01.png" />
                        <h3 className="text-left text-white text-2xl mb-3 font-semibold max-lg:text-xl">Email Data Archive
                        and Migration</h3>
                        <p className="mb-3 text-white">We help you build confidence in your cloud ecosystem to drive innovation, empower your workforce, and manage risk.</p>
                        <ul className="text-white group-hover:text-left">
                            <li>1. Onprem to Cloud migration</li>
                            <li>2. Application migration to cloud</li>
                            <li>3. Serverless computing consultation</li>
                            <li>4. Cost optimization consultation</li>
                            <li>5. Cloud security</li>
                            <li>6. Monitoring and fine tuning of critical metrics</li>
                            <li>7. Performance Monitoring</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[#e4e4e4]">
        <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 max-lg:block">
            <div className="pt-12 max-lg:pt-0 basis-2/3 max-lg:order-last max-sm:order-last max-md:text-center max-sm:text-center max-lg:text-center">
                <p className="font-normal text-2xl my-3 max-md:text-xl">You’re often stuck trying to find solutions for things like IT management and operations. They’re important but can eat away a lot of your time and slow down your growth momentum if you do them yourself.</p>
                <p className="font-normal text-2xl my-3 max-md:text-xl">It’s time to focus on the core and accelerate.</p>
                <Link to="#" className="mt-2 capitalize font-semibold text-xl inline-flex  rounded-[18px] px-5 py-1.5 bg-[#EA7A0F] hover:bg-[#000] text-[#fff] transition">Let's Talk</Link>
                </div>
            <div className="basis-1/3 place-items-end max-lg:place-items-center max-md:place-items-center max-sm:place-items-center grid">
                <img className="float-right" alt="" src="/assets/img/it/it_banner02.png" />
            </div>
        </div>
        </div>   

        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Approach</h1>
            <p className="font-normal text-center mt-4">We've provided managed IT services for large multinational banks over the last 20 years. This is where our expertise comes from. You’ll work with the best consultants in the industry while setting up your processes. We work with strict SLAs, leaving absolutely no room for ambiguity, and our top notch experts will ensure your requirements are met.</p>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 pt-12 gap-8">
                <div className="ce_it_cap_box ce_it_cap_box_approach rounded-[30px] shadow-lg bg-black">
                    <div className="flex items-center h-full text-center ce_it_cap_box_show">
                        <h3 className=" text-white text-2xl mt-4 mb-3 font-semibold">Graduate from break-
                        fix IT to managed IT</h3>
                    </div>
                    <div className="text-left ce_it_cap_box_hover">
                        <h3 className="text-left text-white text-2xl mb-3 font-semibold">Graduate from break-
                        fix IT to managed IT</h3>
                        <p className="mb-3 text-white">We manage tiny details of efficiency, something you may not have the time for. From process assessment to planning. From setting up the resources & infrastructure to implementation. From monitoring to correction. It’s on us.</p>
                        
                    </div>
                </div>
                <div className="ce_it_cap_box ce_it_cap_box_approach rounded-[30px] shadow-lg bg-black">
                    <div className="flex items-center h-full text-center ce_it_cap_box_show">
                        <h3 className=" text-white text-2xl mt-4 mb-3 font-semibold">Transit easy</h3>
                    </div>
                    <div className="text-left ce_it_cap_box_hover">
                        <h3 className="text-left text-white text-2xl mb-3 font-semibold">Transit easy</h3>
                        <p className="mb-3 text-white">We manage tiny details of efficiency, something you may not have the time for. From process assessment to planning. From setting up the resources & infrastructure to implementation. From monitoring to correction. It’s on us.</p>
                        
                    </div>
                </div>
                <div className="ce_it_cap_box ce_it_cap_box_approach rounded-[30px] shadow-lg bg-black">
                    <div className="flex items-center h-full text-center ce_it_cap_box_show">
                        <h3 className=" text-center text-white text-2xl mt-4 mb-3 font-semibold">Easy on the pocket</h3>
                    </div>
                    <div className="text-left ce_it_cap_box_hover">
                        <h3 className="text-left text-white text-2xl mb-3 font-semibold">Easy on the pocket</h3>
                        <p className="mb-3 text-white">We manage tiny details of efficiency, something you may not have the time for. From process assessment to planning. From setting up the resources & infrastructure to implementation. From monitoring to correction. It’s on us.</p>
                        
                    </div>
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
export default Managed_IT;