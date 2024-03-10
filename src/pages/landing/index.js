/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import About from "@/pages/about/About";
import Contact from "../contact/Contact";
import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Project from "@/pages/projects/Project";
import Media from "@/components/socialMedia/Media";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
/* eslint-disable @next/next/no-img-element */
export default function Home() {
    const router = useRouter();

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
            <div className="bg-black">
                <header className="flex justify-between items-center p-10 flex-col md:flex-row max-md:justify-center">
                    <div className="text-sm text-center">
                        <Logo text={'Syed SHayan'} />
                    </div>

                    <nav>
                        <ul className="flex flex-col md:flex-row justify-center items-center text-white md:space-x-20 hover:cursor-pointer text-[1.5rem]">
                            <li className="hover:text-blue-500 duration-500">
                                <Link href={'#about'}>Skills</Link>
                            </li>
                            <li className="hover:text-blue-500 duration-500">
                                <Link href={'#Projects'}>Projects</Link>
                            </li>
                            <li className="hover:text-blue-500 duration-500">
                                <Link href={'#Contact'}>Contact us</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            {/* End Header Section */}

            {/* new section */}
            <section className="pb-32 relative bg-black">
                <div className="text-white flex justify-around items-center p-10 max-lg:flex-col">
                    <div data-aos="fade-right" className="left ml-4 md:ml-24">
                        <div className="text-3xl md:text-5xl mt-4 md:mt-20 mb-4 p-2">
                            Hello I, AM <Logo text={'syed shayan'} />
                        </div>
                        <span className="text-lg md:text-xl text-gray-300 mt-6 md:mt-10 uppercase p-2">
                            I am a Passionate Front-End Web Developer
                        </span>
                        <div className="p-2 lg:w-3/4 text-base md:text-lg text-gray-200 font-sans">
                            I possess one year of experience in HTML, CSS, JavaScript,
                            Git/GitHub, Tailwind CSS, and Next.js, enabling me to create
                            dynamic and responsive web applications with proficiency.
                        </div>
                        <div onClick={cvDownload}>
                            <Button text={"Download Cv"} className="text-base md:text-lg mt-4" />
                        </div>
                    </div>

                    <div data-aos="fade-left" className="right lg:w-3/4 mt-10 order-first md:order-last">
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
