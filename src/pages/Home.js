// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import Banner from "./components/Banner";
const Home = () => {
    return(
        <>
        {/* <h1>Home</h1> */}
        <Banner />
        <div className="mx-auto max-w-7xl items-center justify-between px-6 py-12 lg:px-8">
            <div className="flex max-md:grid max-md:grid-col-1">
            <div className="w-2/5 max-md:w-full border-r-4 border-yellow-500 max-md:text-center max-md:border-none">
                <h1 className="capitalize text-44xl max-lg:text-2xl font-medium">Brands that resonate with millions</h1>
                        <p className="font-normal my-3">Did you know that some of India’s most well <br />known brands are part of the Cyber Elite?</p>
                </div> 
                <div className="w-3/5 max-md:w-full">
                    <div className="owl-carousel owl-theme grid grid-cols-4 max-lg:grid-cols-2 place-items-center self-center items-center h-full ml-5">
                        <div className='item max-md:mt-5'>
                            <img src="/assets/img/brand1.png" alt="cyber elite" />
                        </div>
                        <div className='item max-md:mt-5'>
                        <img src="/assets/img/brand2.png" alt="cyber elite"/>
                        </div>
                        <div className='item max-md:mt-5'>
                        <img src="/assets/img/brand3.png" alt="cyber elite" />
                        </div>
                        <div className='item max-md:mt-5'>
                        <img src="/assets/img/brand4.png" alt="cyber elite"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="mx-auto ce_home_about flex max-lg:flex-col max-w-7xl items-center justify-between px-6 py-12 lg:px-8">
            <div className=" w-3/5 max-lg:w-full max-lg:text-center">
                <h1 className="capitalize text-4xl max-md:text-3xl font-semibold">Drive your success with us</h1>
                <h4 className="text-22xl font-medium my-6">We drive enterprise growth by solving marketing challenges enabled by technology.</h4>
                <p className="text-2xl font-light pr-32 max-lg:pr-0 max-lg:pb-14">At Sumeru, we use digital technologies to move your businesses forward. Our philosophy is to create real change in every aspect of our existence. Giving back through community service is important and gives us a more substantial purpose.</p>
            </div>
            <div className=" w-2/5 place-self-center max-lg:w-full max-lg:text-center">
                <img alt="" src="/assets/img/about.png" />
            </div>
        </div>

        <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">SERVICES</h1>
            <h2 className="text-4xl font-bold text-center capitalize mt-4">What’s We Are Offer For You</h2>
            <p className="font-normal text-center mt-4 px-56 max-lg:px-0">Being an Information Technology and Workforce Solutions company, we offer a variety of services to
            organizations ranging from managing their employees to improving their technology systems.</p>
            <div className="flex flex-row max-md:flex-col pt-12">
                <div className="basis-1/3">
                    <ul className="ce_service_box flex flex-col content-around flex-wrap">
                        <li className="flex items-center content-between">
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">cyber <br />
                            Securities</p>
                            <span className="basis-1/3 max-md:order-first"><img alt="" src="/assets/img/service-1.png"/></span>
                        </li>
                        <li className="flex items-center content-between">
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">IT <br />
                            CONSULTING</p>
                            <span className="basis-1/3 max-md:order-first"><img alt="" src="/assets/img/service-2.png"/></span>
                        </li>
                        <li className="flex items-center content-between">
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">DOMESTIC <br />STAFFING</p>
                            <span className="basis-1/3 max-md:order-first"><img alt="" src="/assets/img/service-3.png"/></span>
                        </li>
                        <li className="flex items-center content-between">
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">DOMESTIC <br />
                            STAFFING</p>
                            <span className="basis-1/3 max-md:order-first"><img alt="" src="/assets/img/service-3.png"/></span>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/3 flex items-center max-md:order-first max-md:basis-1 max-md:hidden">
                    <img src="/assets/img/service-main.png" alt="" />
                </div>
                <div className="ce_service_img max-md:text-center basis-1/3 flex items-center max-md:mb-12 max-md:order-first max-md:block max-md:basis-1 max-md:place-item-center md:hidden">
                    <img src="/assets/img/service-main-resp.png" alt="" />
                </div>
                <div className="basis-1/3">
                    <ul className="ce_service_box ce_service_box_right flex flex-col content-around flex-wrap items-end">
                        <li className="flex items-center content-between">
                            <span className="basis-1/3"><img alt="" src="/assets/img/service-5.png"/></span>
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">SALESFORCE</p>
                        </li>
                        <li className="flex items-center content-between">
                            <span className="basis-1/3"><img alt="" src="/assets/img/service-6.png"/></span>
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">MARKETING<br />
                            AUTOMATION</p>
                        </li>
                        <li className="flex items-center content-between">
                            <span className="basis-1/3"><img alt="" src="/assets/img/service-7.png"/></span>
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">APP<br />
                            DEVLOPMENT</p>
                        </li>
                        <li className="flex items-center content-between">
                            <span className="basis-1/3"><img alt="" src="/assets/img/service-8.png"/></span>
                            <p className="basis-2/3 align-center font-bold text-xl max-lg:text-base uppercase">DIGITAL<br />
                            MARKETING</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">industries</h1>
            <div className="industries_box pt-12 hidden lg:block">
                <div className="flex row ">
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/society.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px] leading-[13.41px]">SOCIETY</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/ecomerce.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">ecommerce</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/cyber_icon.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">cyber security</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/media.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">media and entertainment</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/realestate.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">real estate</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/dating.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">dating</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/telecom_1_.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Telecommuni- cation</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/automobile.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">automobile</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/education.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Education</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/manufacuring.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">manufacturing and retail</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/oil-gas.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Oil &amp; Gas App Development</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/healthcare.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">healthcare</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/travel.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Travel &amp; Hospitality</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/taxi.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">taxi booking</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/retail-industry.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Retail &amp; Industry</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/food-order.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Food Ordering</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/gaming.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Gaming</p>
                        </div>
                    </div>
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/fintech.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Fintech</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="ind_box">
                        <div className="ind_inner_box">
                        <img src="assets/img/industry/hitech.png" alt="cyber elite" />
                        <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">hitech</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="industries_box pt-12 lg:hidden">
            <ul className="d-flex">
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/society.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">SOCIETY</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/ecomerce.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">ecommerce</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/cyber_icon.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">cyber security</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/media.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">media and entertainment</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/realestate.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">real estate</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/dating.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">dating</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/telecom_1_.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Telecommuni- cation</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/automobile.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">automobile</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/education.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">education</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/manufacuring.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">manufacturing and retail</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/oil-gas.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Oil &amp; Gas App Development</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/healthcare.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">healthcare</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/travel.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Travel &amp; Hospitality</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/taxi.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">taxi booking</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/retail-industry.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Retail &amp; Industry</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/food-order.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Food Ordering</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/gaming.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">Gaming</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/fintech.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">fintech</p>
                    </div>
                </div>
                </li>
                <li>
                <div className="ind_box">
                    <div className="ind_inner_box">
                    <img src="assets/img/industry/hitech.png" alt="cyber elite" />
                    <p className="text-[11px] uppercase font-bold pt-2.5 leading-[13.41px] lg:text-[10px]">hitech</p>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        </div>



        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">What we serve</h1>
            <div className="grid grid-cols-6 max-md:grid-cols-3 pt-12 ce_serve">
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/1.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/2.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 max-md:border-r-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/3.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/4.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/5.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-r-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/6.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/7.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/8.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 max-md:border-r-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/9.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/10.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/11.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-r-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/12.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 md:border-b-0 max-md:border-b-1 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/13.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 md:border-b-0 max-md:border-b-1 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/14.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 max-md:border-r-0 md:border-b-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/15.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-b-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/16.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-b-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/17.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                <div className="border border-t-0 border-l-0 border-r-0 border-b-0 border-black p-10 max-lg:p-5">
                    <img alt="" src="assets/img/serve/18.png" className="border-color-gray p-1.5 border rounded-2xl" />
                </div>
                
            </div>
        </div>


        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">WHY CHOOSE Us</h1>
            <h2 className="text-4xl font-bold text-center capitalize mt-4">We Are Different From Other To Provide Services</h2>
            <p className="font-normal text-center mt-4 px-56 max-lg:px-0">There are a number of reasons for choosing the leading Workforce Solutions and
            Information Technology firm— Cyber Elite. You should choose us because we offer:</p>
        </div>    

        <div className="mx-auto max-w-7xl align-center justify-between px-24 max-md:px-5 pb-12 lg:px-24">
            <div className="grid grid-cols-3 max-md:hidden gap-4 place-items-center ce_choose_box ce_choose_box01 ">
                <div className="">
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Wide Range<br /> of Expertise</p>
                    <img alt="" src="assets/img/choose/choose1.png" className="py-2.5 ce_choose_img" /><br /> 
                    <img alt="" src="assets/img/choose/choose-check.png" className="" />
                </div>
                <div className="">
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Cost Savings</p>
                    <img alt="" src="assets/img/choose/choose2.png" className="py-2.5 ce_choose_img" /><br /> 
                    <img alt="" src="assets/img/choose/choose-check.png" className="" />
                </div>
                <div className="">
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Scalability</p>
                    <img alt="" src="assets/img/choose/choose3.png" className="py-2.5 ce_choose_img" /><br /> 
                    <img alt="" src="assets/img/choose/choose-check.png" className="" />
                </div>
            </div>
            <div className="relative grid grid-cols-4 max-md:hidden gap-4 place-items-center ce_choose_box ">
            <img alt="" src="assets/img/choose/choose-line.png" className="absolute ce_choose_line" />
                <div className="">
                    <img alt="" src="assets/img/choose/choose-check.png" className="" /><br /> 
                    <img alt="" src="assets/img/choose/choose4.png" className="py-2.5 ce_choose_img" />
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Flexibility</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose-check.png" className="" /><br /> 
                    <img alt="" src="assets/img/choose/choose5.png" className="py-2.5 ce_choose_img" /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Streamlined<br />
                    Processes</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose-check.png" className="" /><br /> 
                    <img alt="" src="assets/img/choose/choose6.png" className="py-2.5 ce_choose_img" /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Tech-Friendly<br />
                    Services</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose-check.png" className="" /><br /> 
                    <img alt="" src="assets/img/choose/choose7.png" className="py-2.5 ce_choose_img" />
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Improved<br /> Efficiency</p>
                </div>
            </div>
            {/* responsive  */}
            <div className="grid grid-cols-2 md:hidden gap-4 place-items-center ce_choose_box ">
                <div className="">
                    <img alt="" src="assets/img/choose/choose1.png" className="py-2.5 " /><br /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Wide Range<br /> of Expertise</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose2.png" className="py-2.5" /><br /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Cost Savings</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose3.png" className="py-2.5" /><br /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Scalability</p>
                </div>
                <div className=""> 
                    <img alt="" src="assets/img/choose/choose4-respo.png" className="py-2.5" />
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Flexibility</p>
                </div>
                <div className=""> 
                    <img alt="" src="assets/img/choose/choose5-respo.png" className="py-2.5" /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Streamlined<br />
                    Processes</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose6-respo.png" className="py-2.5" /> 
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Tech-Friendly<br />
                    Services</p>
                </div>
                <div className="">
                    <img alt="" src="assets/img/choose/choose7-respo.png" className="py-2.5" />
                    <p className="text-xl font-bold text-[#EA7A0F] leading-6 min-h-12 max-md:text-base">Improved<br /> Efficiency</p>
                </div>
            </div>
        </div> 

        <div className="bg-[#e4e4e4]">
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
        

        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <div className="text-center border border-2 bg-white border-black rounded-[30px] px-14 py-7">
                <h1 className="text-44xl text-color-yellow font-bold text-center uppercase pb-12">GET IN TOUCH</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
                    <input type="text" placeholder="Your Name*" value="" className="mb-8 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] rounded-[15px] py-4 px-4 bg-[#E1E1E1]" />
                    <input type="text" placeholder="Your Email*" value="" className=" mb-8 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] rounded-[15px] py-4 px-4 bg-[#E1E1E1]" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="Your Subject*" value="" className="mb-8 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] rounded-[15px] py-4 px-4 bg-[#E1E1E1]" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="Message*" value="" className="mb-8 placeholder:text-[#6F6F6F] text-base text-[#6F6F6F] rounded-[15px] py-4 px-4 bg-[#E1E1E1]" />
                </div>
                <button type="button" className="uppercase bg-[#FD8010] text-[24px] font-bold text-white rounded-[15px] py-2.5 px-12 transition hover:text-[#000] hover:bg-[#fff] hover:border-black border-white border">submit</button>
            </div>
        </div>
        </>
        );


  };
export default Home;