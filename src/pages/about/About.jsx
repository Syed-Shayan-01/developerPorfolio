/* eslint-disable @next/next/no-img-element */

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GiBulletImpacts } from "react-icons/gi";
import Logo from "../../components/logo/Logo";

const About = () => {
  const aboutPoints = [
    "MERN Stack Developer: React.js, Node.js, Express.js, MongoDB.",
    "React.js Specialist: Creates dynamic interfaces for superior user experiences.",
    "Node.js Expert: Ensures smooth server-side operations with Express.js.",
    "MongoDB Management: Maintains data integrity and optimizes queries.",
    "Tailwind CSS Styling: Rapid, consistent styling across projects.",
    "Next.js Implementation: Enhances SEO and performance with client-server rendering.",
  ];
  return (
    <div className="container mx-auto">
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-around items-center mt-10 lg:mt-40"
      >
        <div
          data-aos="fade-up-down"
          data-aos-offset="400"
          delay="1500"
          data-aos-easing="ease-in-sine"
          className="right mx-6 lg:ml-0"
        >
          <img
            src="/Images/about.png"
            className="h-full w-full lg:w-[70ch] drop-shadow-lg"
            alt="About Image"
          />
        </div>
        <div className="left mx-6 lg:ml-36">
          <h1
            className="text-2xl lg:text-4xl font-bold"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Logo text={"Prowess"} />
          </h1>
          <div>
            <div
              className="text-xl lg:text-3xl text-gray-400"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              I AM A WEB DEVELOPER
            </div>
            <span
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex items-center text-3xl lg:text-5xl my-3 space-x-5 cursor-pointer text-gray-400"
            >
              <AiFillHtml5 className="hover:text-blue-500" />
              <FaCss3Alt className="hover:text-blue-500" />
              <IoLogoJavascript className="hover:text-blue-500" />
              <TbBrandNextjs className="hover:text-blue-500" />
              <AiFillGithub className="hover:text-blue-500" />
              <BiLogoTailwindCss className="hover:text-blue-500" />
            </span>
            <ol>
              {aboutPoints.map((items, index) => {
                return (
                  <li
                    key={`${items}-${index}`}
                    className="lg:text-[1.3rem] text-[1.2rem] py-[4px] text-gray-500"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <GiBulletImpacts className="text-xl lg:text-2xl text-yellow-500 inline-flex items-center" />{" "}
                    {items}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
      <div className="h-0.5 w-full lg:w-[max] my-10 lg:my-40 bg-gray-400"></div>
    </div>
  );
};

export default About;
