'use client'
import {Link } from "react-router-dom";
//import { useState } from 'react'
//import { Dialog, DialogPanel } from '@headlessui/react'
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const Banner = () => {
    return(
        <>
        <div class="mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-1 max-sm:grid-cols-1 max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="pt-16 max-lg:order-last max-sm:order-last max-md:text-center max-sm:text-center max-lg:text-center">
                <h1 className="capitalize text-7xl font-semibold max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl ">hire the experts,<br />
                save your time</h1>
                <p className="text-lg font-normal my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to="#" className="mt-2 capitalize font-semibold text-xl inline-flex border border-black rounded-[18px] px-5 py-1.5 hover:bg-[#EA7A0F] hover:text-[#fff] transition">know more</Link>
            </div>
            <div className="place-items-end max-lg:place-items-center max-md:place-items-center max-sm:place-items-center grid">
                <img className="float-right" alt="" src="/assets/img/banner-img.png" />
            </div>
        </div>
        </>
        );
  };
export default Banner;
