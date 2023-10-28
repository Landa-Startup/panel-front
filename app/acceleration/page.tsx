import Button from '@/components/common/Button';
import Banner from '@/components/common/Banner';
import AccelerationServices from '@/components/acceleration/AccelerationServices';
import Hero from '@/components/acceleration/HeroAcceleration';
import { Metadata } from 'next';
import Image from 'next/image';
import PrimaryDot from '@/components/icons/acceleration/PrimaryDot';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Landa Holding | Acceleration',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default function page() {
  return (
    <div>
      <Hero
        showLanda
        backgroundImage="banner.png"
        leftImage="Landa.svg"
        showButton={true}
      />
      <div className="relative md:w-[490px] h-[284px] md:hidden mt-6 sm:block hidden ">
        <Image
          className=" object-cover"
          src="/static/images/acceleration/17ab142108e84d95264d7c16216c1c25.jpg"
          alt="acceleration"
          layout="fill"
        />
      </div>
      <div className="flex flex-col font-gilda md:px-28 py-6 md:py-16 items-center text-left">
        <span className="text-[#55422A] ml-7 md:ml-0 text-3xl md:text-5xl leading-tight self-start">
          LANDA ACCELERATOR :
        </span>
        <span className="text-[#AA8453] ml-7 md:ml-0 text-xl md:text-4xl leading-tight self-start">
          Growth and Transformation into a Leading Startup
        </span>
        <div className="flex flex-col md:flex-row gap-12 mt-6">
          <div className="relative md:w-[490px] h-[284px] hidden md:block lg:ml-4">
            <Image
              className=" object-cover"
              src="/static/images/acceleration/17ab142108e84d95264d7c16216c1c25.jpg"
              alt="acceleration"
              layout="fill"
            />
          </div>
          <p className="w-[340px] md:w-[680px] md:h-[248px] text-justify font-barlow text-base leading-6 tracking-[1.6px]">
            Our accelerator division, as a leader in the field of startup acceleration and development on a global scale, assists individuals with innovative ideas and startup potentials at all stages, from launch and growth to success. Landa Accelerator aims to support the rapid development and expansion of startups and talented students looking to turn their ideas into high-performing businesses. We are in search of enthusiastic individuals and teams with the necessary skills and creativity to tackle challenges along the way as we accompany them on their journey and these young and well trained experts will be the one we invest in. There is a long way between the start of a business and success, and this is what our company is able to accelerate, which is the main aim in Landa Acceleration Center.
          </p>
        </div>
        <div className="bg-[#F7F3EE] md:w-[1205px] md:h-[756px] mt-6 md:mt-16 relative px-8">
          <div className="flex items-center gap-2 mt-10 md:mt-[77px]">
            <PrimaryDot />
            <div className="flex flex-col md:flex-row">
              <span className="text-[#80633E] font-gilda text-xl md:text-3xl md:mx-2">
                FORUGH ACCELERATOR :
              </span>
              <span className="text-[#AA8453] font-gilda text-base md:text-3xl">
                Igniting Ideas and Startups
              </span>
            </div>
          </div>
          <Image
            className="absolute right-7 top-11 w-[52px] h-[44px]"
            src="/static/images/acceleration/Rectangle 2978.png"
            alt="FORUGH ACCELERATOR"
            width={71}
            height={60}
          />
          <div className="flex flex-col font-barlow leading-[24px] tracking-[1.6px] text-[#000] pb-3 mt-6 md:ml-48 lg:ml-20 xl:ml-0">
            <p>
              In the Landa Accelerator division, innovative ideas and startups
              are carefully examined and evaluated. After confirming the value
              of an idea, we provide investment and connect startups with
              international networks to guide them through the development and
              expansion process. Our goal is to help startups progress more
              quickly and establish a strong presence in global markets.
            </p>
            <p className="mt-5">
              Startups collaborating with us receive support from their early
              stages to their transformation into large companies. We provide
              you with opportunities to grow, achieve remarkable
              accomplishments, and enter global markets.
            </p>
            <span className="text-[#AA8453] font-gilda text-3xl mt-8">
              Accelerator Process
            </span>
            {/* <div className="grid grid-cols-1 md:grid md:grid-rows-6 md:grid-flow-col md:gap-10 md:leading-4 font-barlow text-[#000] leading-9 z-10 lg:grid-rows-6 "> */}
            <div className="grid grid-cols-2 font-barlow text-[#000] z-10 mt-6 gap-4">

              <span>1. Idea generation for innovative business creation</span>
              <span>2. Idea nurturing</span>
              <span>3. Creating a pitch deck</span>
              <span>4. Financial modelling</span>
              <span>5. Mentorship programs</span>
              <span>6. Networking</span>
              <span>7. Cooperative workspace</span>
              <span>8. Digital marketing</span>
              <span>9. Consultation for necessary permits</span>
              <span>10. Seed investment</span>
              <span>11. Market share expansion</span>
              <span>12. Marketing and sales strategy</span>
              <span>13. Business development</span>
              <span>14. Preparation and valuation of business plans</span>
            </div>
            <Image
              className="absolute bottom-0 right-0 opacity-20"
              src="/static/images/acceleration/87ac8df38c4ff428ee903bb8595ad970.png"
              alt="forough"
              width={521}
              height={4221}
            />
          </div>
        </div>
        <div className="bg-[#F7F3EE] md:w-[1205px] md:h-[646px] mt-12 relative pb-3 px-8">
          <div className="flex gap-2 mt-6 md:mt-[77px] items-center ">
            <PrimaryDot />
            <div className="flex">
              <div className="flex flex-col md:flex-row">
                <span className="text-[#80633E] font-gilda text-xl md:text-3xl mx-2 ">
                  FARAZAMAN ACCELERATOR :
                </span>
                <span className="text-[#AA8453] font-gilda text-base md:text-3xl">
                  Supporting Students and the Youth
                </span>
              </div>
            </div>
          </div>
          <Image
            className="absolute right-7 top-11 w-[46px] h-[46px]"
            src="/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png"
            alt="FORUGH ACCELERATOR"
            width={71}
            height={60}
          />
          <div className="flex flex-col font-barlow leading-[24px] tracking-[1.6px] text-[#000] mt-6">
            <p>
              As part of the higher education community, we, under the name of
              Farazman, are committed to supporting and nurturing students and
              youth in university-affiliated incubators and accelerators. We
              believe that the future of careers lies in the hands of young
              individuals, and we enable them to benefit from our resources and
              experiences. By offering financial resources, technical
              infrastructure, and access to global networks, we help students
              and youth turn their ideas into reality and acquire the skills
              needed for today&#39;s business world.
            </p>
            <p className="mt-5">
              Additionally, we emphasize the importance of effective networking
              and skill enhancement for students and startups through education
              and mentorship. Our team consists of experienced mentors, both
              domestic and international, to provide necessary guidance and
              support to help you achieve the best results.
            </p>
          </div>
          <Image
            className="absolute bottom-0 right-0 opacity-20"
            src="/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png"
            alt="forough"
            width={521}
            height={4221}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-gilda text-3xl mt-12">
            Landa Accelerator Services
          </span>
          <AccelerationServices />
        </div>
        <div className="flex text-center md:text-left font-barlow text-xl leading-9 tracking-[2px] md:mx-10 my-11 gap-2 text-[#55422A]">
          <svg
            className="hidden md:block mt-3"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
          >
            <circle
              id="Ellipse 169"
              cx="10.5"
              cy="10.5"
              r="10"
              fill="#AA8453"
            />
          </svg>
          If you have an innovative startup idea or are a student looking for
          acceleration opportunities, we are waiting for your applications.
        </div>
        <Button
          goto="/StartupsForm"
          size="visit"
          text="Register Now"
          bgColor="Primary"
          addedClass="mx-auto"
        />
      </div>
    </div>
  );
}
