/* eslint-disable @next/next/no-img-element */

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GiBulletImpacts } from "react-icons/gi";
import Logo from "../../components/logo/Logo";

const About = () => {
  return (
    <div className="container mx-auto">
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-around items-center mt-10 lg:mt-40"
      >
        <div className="right mx-6 lg:ml-0">
          <img
            src="/Images/about.png"
            className="h-full w-full lg:w-[70ch] drop-shadow-lg"
            alt="About Image"
          />
        </div>
        <div className="left mx-6 lg:ml-36">
          <h1 className="text-2xl lg:text-4xl font-bold">
            <Logo text={"Prowess"} />
          </h1>
          <div>
            <div className="text-xl lg:text-3xl text-gray-400">
              I AM A FRONT-END WEB DEVELOPER
            </div>
            <span className="flex items-center text-3xl lg:text-5xl my-3 space-x-5 cursor-pointer text-gray-400">
              <AiFillHtml5 className="hover:text-blue-500" />
              <FaCss3Alt className="hover:text-blue-500" />
              <IoLogoJavascript className="hover:text-blue-500" />
              <TbBrandNextjs className="hover:text-blue-500" />
              <AiFillGithub className="hover:text-blue-500" />
              <BiLogoTailwindCss className="hover:text-blue-500" />
            </span>
            <ol className="font-sans">
              <li className="text-xl lg:text-2xl text-gray-500">
                <GiBulletImpacts className="text-xl lg:text-2xl text-yellow-500 inline-flex items-center" />{" "}
                I design front-end in terms of user interface
              </li>
              <li className="text-xl lg:text-2xl py-2 text-gray-500">
                <GiBulletImpacts className="text-xl lg:text-2xl text-yellow-500 inline-flex items-center" />{" "}
                I do website designing by TAILWIND CSS
              </li>
              <li className="text-xl lg:text-2xl text-gray-500">
                <GiBulletImpacts className="text-xl lg:text-2xl text-yellow-500 inline-flex items-center" />{" "}
                I also use the API to communicate with the frontend and backend
                in Next.js
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="h-0.5 w-full lg:w-[max] my-10 lg:my-40 bg-gray-400"></div>
    </div>
  );
};

export default About;
