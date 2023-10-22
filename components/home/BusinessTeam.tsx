import Image from 'next/image';
import React from 'react';
import Chevron from '../common/Chevron';
import Link from 'next/link';

export default function AerialViewBusinessTeam() {
  return (
    <div
      style={{
        backgroundImage:
          "url('/static/images/Home/Cooperation-members/Office.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="md:h-[598px] business-team flex justify-center items-center flex-col py-5"
    >
      <div className="pb-5 text-center font-condensed tracking-[3.75px] md:tracking-[7px]">
        <div className="flex flex-col space-y-2 md:space-y-7 md:mb-5">
          <span className="text-white text-base md:text-xl font-normal">
            Landa Holding
            <br />
          </span>
          <span className="text-white text-base md:text-[30px] font-normal">
            What Our Cooperation Members Say
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Chevron direction="left" />
        <div className="md:w-[750px] p-5 flex flex-col items-center backdrop-blur-2xl w-[360px] md:h-[360px]">
          <div className="flex md:flex-col md:items-center md:w-full">
            <div className="relative md:ml-20 md:self-start md:flex-row justify-start items-center gap-[13px] flex flex-col w-[35%]">
              {/* TODO: image should go to this address: /static/images/home/business-team/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg */}
              <Image
                loading="lazy"
                className="w-14 h-14 md:w-[108px] md:h-[104px] border"
                src="/static/images/Home/Cooperation-members/b669e3cb2e3c18d8ff0ec2b8216c00c1.jpg"
                width={500}
                height={500}
                alt="Avatar"
              />
              <div className="md:hidden w-[170px] h-0 left-[115px] top-[170px] absolute origin-top-left -rotate-90 bg-white border border-white"></div>
              <div className="hidden md:block w-[230px] h-[1px] left-0 top-[120px] absolute bg-white border border-white"></div>
              <div className="flex flex-col justify-center md:items-start gap-[3px] text-center items-center ">
                <div className=" text-white text-base md:text-xl font-medium font-barlow inline-flex md:w-48">
                  Morteza Jafari
                </div>
                <div className="text-white text-xs md:text-base font-normal font-barlow ">
                  Founder of IRimmigration
                </div>
                <div className=" text-white text-xs md:text-[15px] font-normal font-gilda mt-1">
                  Investor
                </div>
                <div className="inline-flex gap-3 mt-2 md:hidden">
                  <Link
                    href={'https://www.linkedin.com/in/morteza-jafari-5b40b63a'}
                    target="_blank"
                  >
                    <Image
                      loading="lazy"
                      className="w-4 h-4"
                      src={
                        '/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'
                      }
                      alt="Linkedin"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href={'https://mortezajafari.ca/'}
                    target="_blank">
                    <Image
                      loading="lazy"
                      className="w-4 h-4"
                      src={
                        '/static/images/59f5308a62b217b056f54ef59eeb58e2.png'
                      }
                      alt="Website"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <Link href={'mailto:www.morteza_jafari49@yahoo.com'}>
                    <Image
                      loading="lazy"
                      className="w-4 h-4"
                      src={
                        '/static/images/e0058a18e539cf27599b846c81814c35.png'
                      }
                      alt="Email"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-2.5 pt-4 ml-3 justify-center items-center gap-3 inline-flex w-2/3 md:w-full">
              <div className="text-stone-100 text-xs md:text-xl font-medium leading-[20px] md:leading-[28px] tracking-wider font-barlow md:w-[722px]">
                It amazes me that Landa Holding offers a specialized environment
                for teenagers to enhance their knowledge and refine their unique
                skills. I have rarely seen another company with this feature. So
                I appreciate their valuable initiative for trying to build a
                brighter future.
              </div>
              <div className="flex-col hidden gap-3 mt-2 md:flex ml-5">
                <Link
                  href={'https://www.linkedin.com/in/morteza-jafari-5b40b63a'}
                  target="_blank"
                >
                  <Image
                    loading="lazy"
                    className="w-7 h-w-7"
                    src={'/static/images/76bfd12d298c711fcd5a6fb9f633c967.png'}
                    alt="Linkedin"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={'https://mortezajafari.ca/'}
                  target="_blank">
                  <Image
                    loading="lazy"
                    className="w-7 h-w-7"
                    src={'/static/images/59f5308a62b217b056f54ef59eeb58e2.png'}
                    alt="Website"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={'mailto:www.morteza_jafari49@yahoo.com'}>
                  <Image
                    loading="lazy"
                    className="w-7 h-w-7"
                    src={'/static/images/e0058a18e539cf27599b846c81814c35.png'}
                    alt="Linkedin"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-[12px] md:gap-[19px] inline-flex mt-5">
            <button
              aria-label="Comments Navigation"
              className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-primary rounded-full"
            />
            <button
              aria-label="Comments Navigation"
              className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white"
            />
            <button
              aria-label="Comments Navigation"
              className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white"
            />
            <button
              aria-label="Comments Navigation"
              className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full border border-white"
            />
          </div>
          <div className="w-[283.01px] h-[0px]border border-white"></div>
        </div>
        <Chevron direction="right" />
      </div>
    </div>
  );
}
