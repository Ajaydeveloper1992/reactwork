'use client'
import {Link } from "react-router-dom";
import React from 'react'

const Marketing = () => {
  return (
    <div>
    <div class="mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-1 max-sm:grid-cols-1 max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="pt-16 max-lg:order-last max-sm:order-last max-md:text-center max-sm:text-center max-lg:text-center">
                <h1 className="capitalize text-7xl font-semibold max-xl:text-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl ">Marketing on<br />
                Autopilot</h1>
                <p className="text-lg font-normal my-3">Efficiently optimize your sales and marketing with our automation services,
                saving valuable time and resources</p>
                <Link to="#" className="mt-2 capitalize font-semibold text-xl inline-flex border border-black rounded-[18px] px-5 py-1.5 hover:bg-[#EA7A0F] hover:text-[#fff] transition">know more</Link>
            </div>
            <div className="place-items-end max-lg:place-items-center max-md:place-items-center max-sm:place-items-center grid">
                <img className="float-right" alt="" src="/assets/img/marketing/marketing-banner.png" />
            </div>
        </div>


        <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8 pb-0">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase max-md:text-3xl">Getting Started with Marketing<br /> Automation</h1>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
                <div className="ce_automation_box pt-12 pb-12">
                    <span className="p-8 rounded-full shadow-xl inline-block items-center"><img alt="" src="/assets/img/marketing/auto01.png" /></span>
                    <p className="text-[28px] mt-7 font-semibold max-sm:mt-3">CAPTURE</p>
                </div>
                <div className="ce_automation_box ce_automation_box_center pt-12 pb-12 max-sm:pt-0">
                    <span className="p-8 rounded-full shadow-xl inline-block items-center"><img alt="" src="/assets/img/marketing/auto02.png" /></span>
                    <p className="text-[28px] mt-7 font-semibold max-sm:mt-3">NURTURE</p>
                </div>
                <div className="ce_automation_box pt-12 pb-12 max-sm:pt-0">
                    <span className="p-8 rounded-full shadow-xl inline-block items-center"><img alt="" src="/assets/img/marketing/auto03.png" /></span>
                    <p className="text-[28px] mt-7 font-semibold max-sm:mt-3">CONVERT</p>
                </div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 pt-12">
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-1.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">Know thy customers</h3>
                  <p>Identifying your buyer personas is crucial to
                      understanding their challenges and
                      crafting relevant marketing automation
                      campasigns that help solve those challenges</p>
              </div>
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-2.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">Crafting compelling
                  content for lead capture</h3>
                  <p>Create and publish relevant and targeted
                    content that attracts your web visitors to
                    associate with your brand ecosystem</p>
              </div>
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-3.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">Lead outreach</h3>
                  <p>Enable your sales team to leverage key
                    data to target qualified leads with offers
                    that they can’t resist, leading to high
                    conversions</p>
              </div>
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black md:hidden">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-4.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">Lead nurturing</h3>
                  <p>Stimulate and nurture your target audience
                    with relevant content at every touchpoint
                    using consumer data-backed frameworks
                    powered by analytics.</p>
              </div>
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black md:hidden">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-5.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">All in the company you keep</h3>
                  <p>It’s imperative to collaborate with a
                    marketing automation support partner that
                    has all the technical know-how of
                    automation and how it applies to your
                    specific business use case.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 pt-12 px-48 max-lg:px-24 max-md:hidden">
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-4.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">Lead nurturing</h3>
                  <p>Stimulate and nurture your target audience
                    with relevant content at every touchpoint
                    using consumer data-backed frameworks
                    powered by analytics.</p>
              </div>
              <div className="ce_automation_section text-center p-5 border-2 rounded-3xl border-black">
                  <span className="inline-block p-2.5 border-2 rounded-lg border-black"><img className="inline-block" alt="" src="/assets/img/marketing/auto-5.png" /></span>
                  <h3 className="text-2xl mt-6 mb-3 font-semibold">All in the company you keep</h3>
                  <p>It’s imperative to collaborate with a
                    marketing automation support partner that
                    has all the technical know-how of
                    automation and how it applies to your
                    specific business use case.</p>
              </div>
            </div>
        </div> 

        <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8 pt-7">
            <h1 className="text-44xl text-color-yellow font-bold text-center uppercase">Email Co-Pilot for Success</h1>
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-6 pt-12 ce_marketing_email_section">
                <div className="flex max-sm:block max-sm:text-center">
                    <div className="ce_marketing_email_img">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/marketing/success-1.png" /></span>
                    </div>
                    <div className="ce_marketing_email_cont">
                        <h3 className="text-2xl mt-3 mb-3 font-semibold">Journey Automation</h3>
                        <p>We help our clients maximize impact across CX touchpoints by discovering, building, testing, and fine-tuning automated flows including welcome series, post-purchase, cart abandonment, browse abandonment, reactivation, and a lot more.</p>
                    </div>
                </div>
                <div className="flex max-sm:block max-sm:text-center">
                    <div className="ce_marketing_email_img">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/marketing/success-2.png" /></span>
                    </div>
                    <div className="ce_marketing_email_cont">
                        <h3 className="text-2xl mt-3 mb-3 font-semibold">Segmentation & Personalization</h3>
                        <p>We are committed to supporting growing brands leverage progressive profiling to gain valuable insights into consumer behaviour, enabling hyper-targeted personalization of their messaging.</p>
                    </div>
                </div>
                <div className="flex max-sm:block max-sm:text-center">
                    <div className="ce_marketing_email_img">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/marketing/success-3.png" /></span>
                    </div>
                    <div className="ce_marketing_email_cont">
                        <h3 className="text-2xl mt-3 mb-3 font-semibold">Email Design</h3>
                        <p>We build highly customizable and responsive email template designs that clients can deploy across campaigns without a hassle.</p>
                    </div>
                </div>
                <div className="flex max-sm:block max-sm:text-center">
                    <div className="ce_marketing_email_img">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/marketing/success-4.png" /></span>
                    </div>
                    <div className="ce_marketing_email_cont">
                        <h3 className="text-2xl mt-3 mb-3 font-semibold">Platform Migration</h3>
                        <p>Tired of juggling multiple ESPs? Let us take the stress out of migrating and managing email programs across platforms and help you get the most out of your existing ESP. Need something better? We’ll point you to the right one!</p>
                    </div>
                </div>
                <div className="flex max-sm:block max-sm:text-center">
                    <div className="ce_marketing_email_img">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/marketing/success-5.png" /></span>
                    </div>
                    <div className="ce_marketing_email_cont">
                        <h3 className="text-2xl mt-3 mb-3 font-semibold">Reporting and Analytics</h3>
                        <p>We meticulously track the performance of the deployed automations against robust evaluation metrics. Driven to continuously optimize their implemented efforts, our professionals take great care to scope out every possible avenue of improvement.</p>
                    </div>
                </div>
                <div className="flex max-sm:block max-sm:text-center">
                    <div className="ce_marketing_email_img">
                        <span className="inline-block rounded-full p-2.5 bg-black"><img alt="" src="/assets/img/marketing/success-6.png" /></span>
                    </div>
                    <div className="ce_marketing_email_cont">
                        <h3 className="text-2xl mt-3 mb-3 font-semibold">A/B Testing</h3>
                        <p>To understand what resonates best with your audiences, we rigorously pit different elements of your automated emails against one another to determine the top-performing ones. All implemented changes are backed by indisputable data.</p></div>
                </div>
            </div>   
        </div> 

        <div className="bg-[#000]">
        <div class="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8 pt-7">
            <h1 className="text-44xl text-[#fff] font-bold text-center uppercase">Impact Delivered</h1>
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 pt-12">
                <div className="text-center">
                    <img className="inline-block" alt="" src="/assets/img/marketing/impact-1.png" />
                    <h2 className="text-[#FD8010] text-[64px] font-extrabold">2/3</h2>
                    <p className="text-[#fff]">Nearly 2/3 of companies which are
                        using automation have outgrown
                        their competitors</p>
                </div>
                <div className="text-center">
                    <img className="inline-block" alt="" src="/assets/img/marketing/impact-2.png" />
                    <h2 className="text-[#FD8010] text-[64px] font-extrabold">76%</h2>
                    <p className="text-[#fff]">76% of companies that implemented marketing automation generated a return on their investment within the first year</p>
                </div>
                <div className="text-center">
                    <img className="inline-block" alt="" src="/assets/img/marketing/impact-3.png" />
                    <h2 className="text-[#FD8010] text-[64px] font-extrabold">12.2%</h2>
                    <p className="text-[#fff]">Marketing automation provided
                        a 12.2% reduction in marketing
                        overhead.</p>
                </div>
                <div className="text-center">
                    <img className="inline-block" alt="" src="/assets/img/marketing/impact-4.png" />
                    <h2 className="text-[#FD8010] text-[64px] font-extrabold">4X</h2>
                    <p className="text-[#fff]">Successful companies are utilizing 4x marketing automation tools for lead generation, qualification, and customer retention</p>
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
  )
}

export default Marketing