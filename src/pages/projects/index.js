import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../components/logo/Logo';
import data from '@/utils/projectsname.json';
import Button from '@/components/button/Button';

const Project = () => {
    return (
        <div id="Projects" className="">
            <div className="text-3xl md:text-5xl text-center mb-8">
                <Logo text={'Projects'} />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((items, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-offset="500"
                            delay={800}
                            data-aos-easing="ease-in-sine"
                            className="bg-white rounded-lg shadow shadow-[#33a5af] overflow-hidden"
                        >
                            <Image
                                className="w-full h-[20vh] object-cover hover:scale-75 duration-300"
                                src={'/Images/portfolio.png'}
                                width="400"
                                height="200"
                            />
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{items.name}</h3>
                                <Link href={`${items.links}`} className="mt-2 leading-6 hover:text-black text-gray-500">{items.description}</Link>
                                <div className="mt-2">
                                    <a href="#" className="text-gray-400">{items.hashtags}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-8" 
                data-aos="zoom-in"
                data-aos-offset="500"
                delay={800}
                data-aos-easing="ease-in-sine">
                <Link href={'https://github.com/Syed-Shayan-01'}>
                    <Button text={'See More'} />
                </Link>
            </div>
        </div>
    );
}

export default Project;
