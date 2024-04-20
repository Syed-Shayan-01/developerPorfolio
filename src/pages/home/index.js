/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button/Button";
import About from "@/pages/about";
import Contact from "../contact/";
import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Project from "@/pages/projects/";
import Media from "@/components/socialMedia/Media";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Nav from "@/components/navbar/Navbar";
/* eslint-disable @next/next/no-img-element */
export default function Home() {
    const router = useRouter();

    useEffect(() => {
        AOS.init();
    }, [])
    const cvDownload = () => {
        toast.info('lets open the resume!', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        setTimeout(() => {
            router.replace('https://drive.google.com/file/d/12FxOY4YnwjT3ZGYSHnCA2_eysES31X2G/view?usp=drive_link')
        }, 1500);
    }

    return (
        <div id="/">
            <Nav />
            {/* End Header Section */}

            {/* new section */}
            <section className="pb-32 relative bg-black">
                <div className="text-white flex justify-around items-center p-10 max-lg:flex-col">
                    <div className="left ml-4 md:ml-24">
                        <div className="text-3xl md:text-5xl mt-4 md:mt-20 mb-4 p-2">
                            Hello I, AM <Logo text={'syed shayan'} />
                        </div>
                        <span className="text-sm md:text-xl text-gray-300 mt-6 md:mt-10 uppercase p-2">
                            I am a Passionate Front-End Web Developer
                        </span>
                        <div className="p-2 text-lg lg:w-3/4 text-justify md:text-lg text-gray-200 font-sans">
                            I possess one year of experience in HTML, CSS, JavaScript,
                            Git/GitHub, Tailwind CSS, and Next.js, enabling me to create
                            dynamic and responsive web applications with proficiency.
                        </div>
                        <div onClick={cvDownload}>
                            <Button data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" text={"Download Cv"} className="text-base md:text-lg mt-4" />
                        </div>
                    </div>

                    <div data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="right lg:w-3/4 mt-10 order-first md:order-last">
                        <video
                            src="/Images/hero.mp4"
                            className="w-full md:w-[60%]  h-auto md:h-full rounded"
                            loop
                            autoPlay
                            muted
                            playsInline  // Add this to make it work on iOS
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
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </section>

            <About />
            <Project />
            <Media />
            <Contact />
            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
}
