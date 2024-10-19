'use client'
import React from 'react'

const Contact = () => {
    return(
        <div>
        
        <div class="mx-auto max-w-7xl items-center justify-between py-12 px-6 lg:px-8">
            <div className="pb-12 text-center pt-12 max-md:py-0 max-lg:order-last max-sm:order-last max-md:text-center max-sm:text-center max-lg:text-center">
                <p className="text-lg font-normal">Contact Us</p>
                <h1 className="capitalize text-[40px] font-bold leading-[65px] max-xl:text-4xl max-lg:text-4xl max-md:text-3xl max-sm:text-3xl ">Let’s discuss on something cool together</h1>
            </div>
        </div>

        <div className="flex mb-32 mx-auto max-w-7xl align-center justify-between px-6 py-12 pt-0 lg:px-8 max-lg:block">
            <div className="w-2/5 lg:pl-14 order-last max-lg:flex max-lg:w-full ">
                <img className="max-md:w-1/3 max-sm:hidden" alt="" src="/assets/img/contact/contact_img.png"/>
                <div className="mt-8 max-lg:pl-4 max-md:w-2/3 max-sm:w-full max-sm:pl-0 max-lg:mt-0">
                    <p className="flex mt-4">
                        <span className="w-1/6 "><img alt="" src="/assets/img/contact/contact-a.png" /></span>
                        <span className="w-5/6 items-center flex">226 LIG, Jawahar Nagar, Near AB Road Dewas, 455001, India</span>
                    </p>
                    <p className="flex mt-4">
                        <span className="w-1/6 "><img alt="" src="/assets/img/contact/contact-c.png" /></span>
                        <span className="w-5/6 items-center flex">Head Office : 0731-3142 545<br />Phone : +91-708-989-9090</span>
                    </p>
                    <p className="flex mt-4">
                        <span className="w-1/6 "><img alt="" src="/assets/img/contact/contact-e.png" /></span>
                        <span className="w-5/6 items-center flex">info@cyberelite.in</span>
                    </p>
                </div>
            </div>
            <div className="w-3/5 text-center max-lg:w-full max-lg:pt-12">
                <div className="grid grid-cols-1 md:grid-cols-1 md:gap-4 gap-0">
                    <input type="text" placeholder="Enter Your Name" value="" className="mb-8 max-sm:mb-4 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] py-5 px-4 bg-[#E1E1E1]" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                <input type="text" placeholder="Enter Your Email Address" value="" className=" mb-8 max-sm:mb-4 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] py-5 px-4 bg-[#E1E1E1]" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <textarea type="text" placeholder="MessageGo ahead, We are listening..." rows={8} value="" className="mb-8 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] py-4 px-4 bg-[#E1E1E1]" />
                </div>
                <button type="button" className="uppercase bg-[#FD8010] text-2xl font-semibold text-white rounded-[15px] py-2 px-6 transition hover:text-[#000] hover:bg-[#fff] hover:border-black border-white border">Send Message</button>
            </div>
        </div>

        </div>
        );
  };
export default Contact;