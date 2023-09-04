import Button from "@/components/Button";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Project from "@/components/projects/Project";
import Media from "@/components/socialMedia/Media";
import Link from "next/link";
import { Fragment } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <Fragment id="/">
      <div className="bg-black" >
        <header className="flex justify-between items-center p-10">
          <div>
            <Logo text={'Syed SHayan'} />
          </div>

          <nav>
            <ul className="flex justify-center items-center text-white space-x-20 mr-10 hover:cursor-pointer text-[1.5rem]">
              <li className="hover:text-blue-500 duration-500"><Link href={'#about'}>Skills</Link></li>
              <li className="hover:text-blue-500 duration-500"><Link href={'#Projects'}>Projects</Link></li>
              <li className="hover:text-blue-500 duration-500"><Link href={'#Contact'}>Contact us</Link></li>
            </ul>
          </nav>
        </header>
      </div>
      {/* new section */}
      <section className="pb-32  relative bg-black">
        <div className=" text-white flex justify-around items-center  p-10">
          <div className="left ml-24">
            <div className="text-5xl w-80 mt-20 mb-4 p-2">
              Hello I,AM <Logo text={'syed shayan'} />
            </div>
            <span className="text-xl  text-gray-300 mt-10 uppercase p-2">
              I,am Passionate Front-End Web Developer
            </span>
            <div className="p-2 w-2/3 uppercase text-xl text-gray-200 font-sans">
              I possess one year of experience in HTML, CSS, JavaScript,
              Git/GitHub, Tailwind CSS, and Next.js, enabling me to create
              dynamic and responsive web applications with proficiency.
            </div>
            <Button text={"Download Cv"} />
          </div>

          <div className="right mt-10">
            <video
              src="/Images/hero.mp4"
              className="h-full w-[100vh]  rounded"
              loop
              autoPlay
              muted
            >
              Hello
            </video>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1693121354">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <About />
      <Project />
      <Media />
      <Contact />
      <Footer />
    </Fragment>
  );
}



