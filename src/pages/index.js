import Button from "@/components/Button";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Project from "@/components/projects/Project";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className="bg-black">
        <header className="flex justify-between items-center p-10">
          <div>
            <span className="logo text-2xl  font-bold text-purple-700  drop-shadow-xl">
              Syed Shayan
            </span>
          </div>

          <nav>
            <ul className="flex justify-center items-center text-white space-x-20 mr-10 hover:cursor-pointer text-lg">
              <li className="hover:text-purple-500"><Link href={'#about'}>Skills</Link></li>
              <li className="hover:text-purple-500"><Link href={'#Projects'}>Projects</Link></li>
              <li className="hover:text-purple-500"><Link href={'#Contact'}>Contact us</Link></li>
            </ul>
          </nav>
        </header>
      </div>
      {/* new section */}
      <section className="pb-32  relative bg-black">
        <div className=" text-white flex justify-around items-center space-x-52 p-10">
          <div className="left ml-24">
            <div className="text-4xl w-80 mt-20 font-bold p-2">
              {" "}
              Hello My Name Syed Shayan
            </div>
            <span className="text-xl mt-10 p-2 hover:text-indigo-100 ">
              I,am Passionate Front-End Web Developer
            </span>
            <div className="p-2 w-2/3 text-xl font-sans">
              I possess one year of experience in HTML, CSS, JavaScript,
              Git/GitHub, Tailwind CSS, and Next.js, enabling me to create
              dynamic and responsive web applications with proficiency.
            </div>
            <Button text={"Download Cv"} />
          </div>

          <div className="right w-2/3 mt-10">
            <video
              src="/Images/hero.mp4"
              className="h-full w-80  rounded"
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
      <Contact />
      <Footer />
    </>
  );
}



