import React from 'react';
import Image from 'next/image';
import IconPhoneAcademy from '../icons/IconPhoneAcademy';
import IconYellow from '../icons/IconYellow';
import IconStar from '../icons/IconStar';

export default function SeoCourses() {
  return (
    <>
      <div className="container px-5 mx-auto my-10 font-normal text-black lg:p-10 font-barlow">
        <div className="text-center">
          <p className="text-4xl text-[#FDD30A] tracking-widest	mb-10">
            Landa Academy
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 justify-items-center">
            <div className="col-span-3 py-5 text-center lg:col-span-1">
              <div>
                <div>
                  <p className="text-2xl">
                    A two-day SEO course consisting of two sessions, each
                    lasting 9 hours, will be conducted.
                  </p>
                </div>
                <div className="bg-[#F1F8EC] my-5 mx-20 py-5">
                  <p className="my-1 text-2xl">Course Price</p>
                  <p className="text-3xl my-1 line-through decoration-wavy decoration-[#FDD30A]">
                    4,200,000T
                  </p>
                  <p className="my-1 text-3xl">2,900,000T</p>
                </div>
                <div className="bg-[#F1F8EC]  my-5 mx-20 py-5">
                  <p className="my-1 text-2xl">Contact Us</p>
                  <div className="flex justify-center my-1 ">
                    <IconPhoneAcademy />
                    <a
                      className="text-[#80C555] text-2xl ml-1  my-1"
                      href="tel:09120539563"
                    >
                      09120539563
                    </a>
                  </div>
                  <div className="flex justify-center my-1 ">
                    <IconPhoneAcademy />
                    <a
                      className="text-[#80C555] text-2xl ml-1 mr-5 my-1"
                      href="tel:03131311914"
                    >
                      03131311914
                    </a>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    role="button"
                    className="btn border-0 text-xl text-white bg-[#FDD30A] hover:bg-[#fcda30] rounded-none	px-14  mb-10"
                    href="https://zarinp.al/527792"
                  >
                    Buy Now
                  </a>
                </div>
                <div>
                  <p className="text-2xl font-medium ">
                    Benefits of participating in the SEO course
                  </p>
                </div>
                <div className="flex bg-[#FFFBE6] px-3 py-5 mx-10 my-10">
                  <IconStar />
                  <span className="ml-3 text-xl">
                    At the end of the course, a valid and questionable
                    certificate will be awarded to you by Landa Academy.
                  </span>
                </div>
                <div className="flex bg-[#FFFBE6] px-3 py-5 mx-10 my-10">
                  <IconStar />
                  <span className="ml-3 text-xl">
                    Also for the best of this course There is an employment
                    condition.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-3 px-5 py-5 lg:col-span-2 lg:px-20">
              <div>
                <div className="flex">
                  <IconYellow />
                  <span className="ml-3 text-4xl">
                    Overview of SEO Training Course
                  </span>
                </div>
                <div>
                  <p className="my-5 text-xl leading-8">
                    Learning SEO is an acquired skill. Therefore, you must bear
                    in mind that in this journey, even the smallest misguided
                    learning source can lead you astray from the path of proper
                    education. Cultivating the right mindset necessitates a
                    correct form of instruction, which undoubtedly evolves from
                    initially mastering the skill and subsequently gaining
                    experience through trial and error. <br /> The comprehensive
                    SEO course conducted by Landa Academy and authored and
                    recorded by Iman Nasr. In the SEO Manager course, you will
                    effortlessly acquire all the skills required to become an
                    SEO specialist and proficiently perform website SEO
                    services.
                  </p>
                </div>
                <div className="flex mt-16 mb-10">
                  <IconYellow />
                  <span className="ml-3 text-4xl font-medium">Headline</span>
                </div>
                <div>
                  <div className="rounded-none collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-2xl	font-medium bg-[#F1F8EC] text-[#3D5656]">
                      First Day
                    </div>
                    <div className="collapse-content bg-white text-[#3D5656]">
                      <ul className="list-image-[url(/static/images/Academy/green.png)] pl-5 text-xl	text-black	my-5 leading-9	 ">
                        <li>Basic concepts related to SEO</li>
                        <li>SEO tools</li>
                        <li>Keyword research</li>
                        <li>On-Page and Off-Page SEO Optimization</li>
                        <li>Familiarity with Technical SEO</li>
                        <li>Understanding Google Algorithms and Bots</li>
                        <li>Speed Optimization</li>
                        <li>Semantic Structure in HTML</li>
                        <li>Meta Tags</li>
                        <li>Comprehensive Training on Search Console</li>
                        <li>Schema Structure</li>
                        <li>Keyword Planner</li>
                        <li>Enhancing Website Security</li>
                        <li>DNS Server</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-none collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-2xl 	font-medium bg-[#F1F8EC] text-[#3D5656]">
                      Second Day
                    </div>
                    <div className="collapse-content bg-white text-[#3D5656]">
                      <ul className="list-image-[url(/static/images/Academy/green.png)] pl-2  text-xl text-black 	my-5 leading-9">
                        <li>Web Server</li>
                        <li>Hosting Server</li>
                        <li>Domain</li>
                        <li>Social Media Marketing (SMM)</li>
                        <li>Google Panda Algorithm</li>
                        <li>Choosing the Right Domain</li>
                        <li>
                          Analysis and Resolution of All Technical Site Issues
                        </li>
                        <li>Schema Markup</li>
                        <li>Familiarity with MOZ</li>
                        <li>Black Hat SEO</li>
                        <li>And dozens of other related topics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
