/* eslint-disable jsx-a11y/alt-text */


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Project = () => {
    return (
        <>
            <div id="Projects">
                <div className=" text-5xl text-gray-600 drop-shadow-md
                 font-sans font-bold flex justify-center my-40">
                    Projects
                </div>
                <div>
                    <ol className='flex justify-around items-center'>
                        <li>
                            <div className="rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105 ">
                                <Image src="/Images/mini-hack.png" className="w-96 h-80" width={400} height={200}></Image>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Mini Hackaton SMIT</div>
                                    <Link className="text-gray-700 text-sm  hover:text-black" href="https://syed-shayan-01.github.io/Mini-Hackaton-SMIT/">
                                        My Mini Hacakton Project in SMIT
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105 ">
                                <Image src="/Images/portfolio.png" className="w-96 h-80" width={400} height={200}></Image>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Simple Portfolio</div>
                                    <Link className="text-gray-700 text-sm  hover:text-black" href="https://tailwind-app-snowy.vercel.app/">
                                        My First Practice Simple Portfolio Using Next js
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105 ">
                                <Image src="/Images/word-count.png" className="w-96 h-80" width={400} height={200}></Image>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Word Counter App</div>
                                    <Link className="text-gray-700 text-sm  hover:text-black" href="https://word-counter-nextjs.vercel.app/">
                                        My Word Counter App using Next js
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className='flex justify-center my-32'>Check out my github to watch more projects....................</div>
            </div>
        </>
    )
}

export default Project