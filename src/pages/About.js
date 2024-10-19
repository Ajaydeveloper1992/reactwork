'use client'
import React from 'react'

const About = () => {
    return(
        <div>

        <div class="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="pt-16 text-center">
                <h1 className="capitalize text-7xl font-normal max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl ">It’s not <b>about us,</b><br />
                It’s <b>about your business</b></h1>
                <p className="font-normal my-3 px-32 max-md:px-0">Cyber Elite is a leading group of Workforce Solutions & Information Technology experts involved in learning and serving the private, public and social sectors.</p>
                <p className="font-normal my-3 px-32 max-md:px-0">With our office in Bhopal and headquarters in Indore, Madhya Pradesh, we provide services to businesses of all sizes, located anywhere on the globe.</p>
                <p className="font-normal my-3 px-32 max-md:px-0">The company was founded in 2012 with a motive of specializing in Business Transformation. With more than a decade in the business, we have built a reputation for delivering innovative solutions and exceptional customer services to our customers</p>
                <p className="font-normal my-3 px-32 max-md:px-0">From C-suite to the front line, Cyber Elite helps its customers to evolve their organization in ways that can make the biggest difference. Adding value with right expertise and serving one stop solution to our clients is what we ensure. Our solutions are easily implementable, scalable at any stage and future-ready. We thrive in successful deliverables and provide the best experience for all our customers with our robust mechanism of certifying required deliverables.</p>
                <p className="font-normal my-3 px-32 max-md:px-0"><b className="font-bold">Come and explore more about us over a cup of coffee!</b></p>
                </div>
        </div>

        <div className="bg-[#000]">
        <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1 gap-14 max-lg:gap-6">
              <div className="bg-[#fff] text-center px-3 py-8">
                  <img className="inline-block" alt="" src="/assets/img/about/about1.png" />
                  <h3 className="text-2xl mt-3 mb-3 font-bold">Scalability</h3>
                  <p>Cyber Elite can often scale its services up or down as needed, making it a good option for businesses that experience fluctuations in demand.</p>
              </div>
          
              <div className="bg-[#fff] text-center px-3 py-8">
                  <img className="inline-block" alt="" src="/assets/img/about/about2.png" />
                  <h3 className="text-2xl mt-3 mb-3 font-bold">Flexibility</h3>
                  <p>A good Workforce Solutions and IT company like Cyber Elite, adapts its services in a way that it's capable of meeting the unique needs of each business they work with.</p>
              </div>
              <div className="bg-[#fff] text-center px-3 py-8">
                  <img className="inline-block" alt="" src="/assets/img/about/about3.png" />
                  <h3 className="text-2xl mt-3 mb-3 font-bold">Cost Savings</h3>
                  <p>By working with a company like ours that offers multiple services, businesses can often save money compared to hiring multiple vendors.</p>
              </div>
            </div>  
        </div>
        </div>

        <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Our Mission and Vision</h1>
            <div className="grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 pt-12">
                <div className="text-center px-24 py-5 border-r-2 border-[#333] max-sm:border-r-0 max-lg:px-12 max-md:px-4">
                    <img className="inline-block" alt="" src="/assets/img/about/mission.png" />
                    <h3 className="text-2xl mt-3 mb-3 font-bold">Mission</h3>
                    <p>Our mission is to help our clients achieve their business goals through the power of technology. In order to make this happen, we match up with the forefront of industry trends, invest in the latest tools and technologies and much more.</p>
                </div>
                <div className="text-center px-24 py-5 max-lg:px-12 max-md:px-4">
                    <img className="inline-block" alt="" src="/assets/img/about/vision.png" />
                    <h3 className="text-2xl mt-3 mb-3 font-bold">Vision</h3>
                    <p>The idea is to offer the upper crust to our clients. We believe in building long-term partnership with our clients, which is why we take the time to understand their unique needs and goals. We pride ourselves on delivering customized solutions that are tailored to their specific requirements.</p>
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
export default About;