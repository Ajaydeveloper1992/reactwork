'use client'
import {Link } from "react-router-dom";
import React from 'react'

const Referral = () => {
    return(
        <div>
            <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 pb-12 max-lg:block">
                <div className="basis-2/5 place-items-center order-last max-lg:place-items-center max-md:place-items-center max-sm:place-items-center grid">
                    <img className="float-right" alt="" src="/assets/img/referral/referral_banner.png" />
                </div>
                <div className="pt-4 basis-3/5 max-lg:order-last max-lg:pt-8 max-sm:order-last max-md:text-center max-sm:text-center max-lg:text-center">
                    <h1 className="capitalize text-5xl font-bold max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl ">Mavlers Referral Program</h1>
                    <p className="font-normal text-lg my-3">For every successful client referral you make, we will reward you with</p>
                    <p className="font-bold text-lg my-3">20%* kick-back for a one-off project</p>
                    <p className="font-bold text-lg my-3">10%* kick-back for a recurring engagement</p>
                </div>
            </div>

            <div className="bg-[#e4e4e4] ">
                <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
                    <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">How it works?</h1>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 pt-12 max-lg:gap-4">
                        <div className="text-center p-6 bg-[#000] rounded-[30px] mx-16 max-lg:mx-0">
                            <p className="text-[#fff]">Refer businesses by directly introducing them to your
                                Mavlers Account Manager / Mavlers Representative /
                                contact@mavlers.com</p>
                        </div>
                        <div className="text-center p-6 bg-[#000] rounded-[30px] mx-16 max-lg:mx-0">
                            <p className="text-[#fff]">As soon as the business you refer starts working with
                                Mavlers and becomes a paying client, we give you the
                                applicable kick-back.</p>
                        </div>
                   </div>
                </div>    
            </div> 

            <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
                    <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Our Offerings</h1>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1 pt-12 gap-8">
                        <div className="group text-center rounded-[30px] shadow-lg pb-6">
                            <h3 className="font-semibold text-2xl text-[#fff] bg-[#000] py-4 rounded-t-[30px] transition group-hover:bg-[#FD8010] max-lg:text-xl">Project Based</h3>
                            <p className="mt-6 px-6">A one-off project like web development, paid campaign, search, CRM and automation, UI UX design, & more.</p>
                            <p className="mt-6 px-6">The referral: You get 20% of the referred client’s invoice amount for their first project with us.</p>
                        </div>
                        <div className="group text-center rounded-[30px] shadow-lg pb-6">
                            <h3 className="font-semibold text-2xl text-[#fff] bg-[#000] py-4 rounded-t-[30px] transition group-hover:bg-[#FD8010] max-lg:text-xl">Retainer Engagement</h3>
                            <p className="mt-6 px-6">A long-run engagement for SEO, paid media, link building, email campaign management, CRM and automation, & more.</p>
                            <p className="mt-6 px-6">The referral: You get 10% of the referred client’s monthly invoice amount for the first 12 months. So, for example, if the client’s invoice amount for each month is $1000, you get $100 for 12 months! However, this will change if the invoice amount changes for any month during the engagement.</p>
                        </div>
                        <div className="group text-center rounded-[30px] shadow-lg pb-6">
                            <h3 className="font-semibold text-2xl text-[#fff] bg-[#000] py-4 rounded-t-[30px] transition group-hover:bg-[#FD8010] max-lg:text-xl">Dedicated Model</h3>
                            <p className="mt-6 px-6">Businesses can easily hire managed full-time resources or build a robust team with Mavlers 10X faster.</p>
                            <p className="mt-6 px-6">The referral: You get 10% of the referred client’s monthly invoice amount when they opt to hire a dedicated resource or team with us. This referral amount will be transferred to you for the first 12 months of the engagement.</p>
                        </div>
                    </div> 
                    <div className="text-center">
                        <Link to="#" className="mt-10 inline-block transition capitalize font-semibold text-xl inline-flex border border-white text-white bg-[#EA7A0F] rounded-[18px] px-5 py-1.5 hover:bg-[#000] hover:text-[#fff] transition">Start Referring</Link>   
                    </div>
            </div>

            <div className="bg-[#000]">
                <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 pb-0 lg:px-8">
                    <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Who Should Refer?</h1>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1 pt-12 gap-8">
                        <div className="group text-center pb-12 ce_should_refer_box">
                            <span className="inline-block rounded-full p-2.5 bg-white group-hover:bg-[#FD8010] transition">
                                <img ClassName="transition" alt="" src="/assets\img\referral/refer01.png" /></span>
                            <h5 className="text-2xl mt-3 mb-3 font-semibold text-white">Cyber Clients</h5>
                            <p className="text-white">If you use our services, you know firsthand
                            how it can benefit other businesses</p>
                        </div>
                        <div className="group text-center pb-12 ce_should_refer_box">
                            <span className="inline-block rounded-full p-2.5 bg-white group-hover:bg-[#FD8010] transition">
                                <img ClassName="transition" alt="" src="/assets\img\referral/refer02.png" /></span>
                            <h5 className="text-2xl mt-3 mb-3 font-semibold text-white">Cyber Client's Employees</h5>
                            <p className="text-white">Even though you are connected with us on behalf of your company, referral from your personal network would be treated as an individual consultant contribution.</p>
                        </div>
                        <div className="group text-center pb-12 ce_should_refer_box">
                            <span className="inline-block rounded-full p-2.5 bg-white group-hover:bg-[#FD8010] transition">
                                <img ClassName="transition" alt="" src="/assets\img\referral/refer03.png" /></span>
                            <h5 className="text-2xl mt-3 mb-3 font-semibold text-white">Industry Consultants</h5>
                            <p className="text-white">Help your clients hire 10X faster and more efficiently.</p>
                        </div>
                    </div>
                    <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Some Facts</h1>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1 pt-12 gap-8">
                        <div className="flex items-center group text-center mb-12 py-4 px-8 bg-white rounded-[30px]">
                            <p className="">We are frequently recommended by our family of 7000+ clients</p>
                        </div>
                        <div className="flex items-center group text-center mb-12 py-4 px-8 bg-white rounded-[30px]">
                            <p>We are a 10 years old organization, 800+ team strength, 100% remote.</p>
                        </div>
                        <div className="flex items-center group text-center mb-12 py-4 px-8 bg-white rounded-[30px]">
                            <p>We’ve deployed dedicated resources across the globe. 600+ dedicated resources, 100+ teams.</p>
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
export default Referral;