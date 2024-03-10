import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../components/logo/Logo';

const Project = () => {
    return (
        <div id="Projects" className="my-10 md:my-40">
            <div className="text-3xl md:text-5xl text-center mb-8">
                <Logo text={'Projects'} />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105">
                    <Image
                        src="/Images/mini-hack.png"
                        className="w-full h-80 md:w-96 md:h-80"
                        width={400}
                        height={200}
                        alt="Mini Hackaton SMIT"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Mini Hackaton SMIT</div>
                        <Link className="text-gray-700 text-sm hover:text-black" href="https://syed-shayan-01.github.io/Mini-Hackaton-SMIT/">
                            My Mini Hackaton Project in SMIT
                        </Link>
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105">
                    <Image
                        src="/Images/portfolio.png"
                        className="w-full h-80 md:w-96 md:h-80"
                        width={400}
                        height={200}
                        alt="Simple Portfolio"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Simple Portfolio</div>
                        <Link className="text-gray-700 text-sm hover:text-black" href="https://tailwind-app-snowy.vercel.app/">
                            My First Practice Simple Portfolio Using Next.js
                        </Link>
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105">
                    <Image
                        src="/Images/word-count.png"
                        className="w-full h-80 md:w-96 md:h-80"
                        width={400}
                        height={200}
                        alt="Word Counter App"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Word Counter App</div>
                        <Link className="text-gray-700 text-sm hover:text-black" href="https://word-counter-nextjs.vercel.app/">
                            My Word Counter App using Next.js
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8 hover:scale-110 hover:text-blue-600 font-bold duration-300">
                Check out my GitHub to watch more projects....................
            </div>
        </div>
    );
}

export default Project;
