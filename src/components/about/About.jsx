/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GiBulletImpacts } from "react-icons/gi";
const About = () => {
  return (
    <div>
      <section id="about" className=" flex justify-around items-center mt-40">
        <div className="right ml-36">
          <img
            src="/Images/about.png"
            className="h-full w-[70ch]  drop-shadow-[0_35px_35px_gray] "
          />
        </div>
        <div className="left ml-36">
          <h1 className=" text-[4rem] font-bold ">About</h1>

          <div>
            
              <div className=" text-3xl text-gray-400">
                I,AM A FRONT-END WEB DEVELOPER
              </div>
              <span className="flex items-center text-[3rem] my-3  space-x-5 cursor-pointer text-gray-400">
                <AiFillHtml5 className=" hover:text-blue-500" />
                <FaCss3Alt className=" hover:text-blue-500" />
                <IoLogoJavascript className=" hover:text-blue-500" />
                <TbBrandNextjs className=" hover:text-blue-500" />
                <AiFillGithub className=" hover:text-blue-500" />
                <BiLogoTailwindCss className=" hover:text-blue-500" />
              </span>
              <ol className=" font-sans">
              <li className="text-2xl  text-gray-500">
                <GiBulletImpacts className="  text-2xl  text-yellow-500 inline-flex items-center" />{" "}
                I design front-end in terms of user interface
              </li>
              <li className="text-2xl py-2 text-gray-500 w-2/3">
                <GiBulletImpacts className=" text-2xl text-yellow-500  inline-flex items-center" />{" "}
                I do website designing by TAILWIND CSS
              </li>
              <li className="text-2xl  text-gray-500 w-2/3">
                <GiBulletImpacts className=" text-2xl  text-yellow-500 inline-flex items-center" />{" "}
                I also use the api to communicate with the frontend and backend
                in the nextjs
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
