import Link from 'next/link'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
     <footer className=" flex justify-around items-center my-20 max-md:flex-col">
        <div className=" text-3xl font-bold max-md:mb-4">
         <Link href="/">Syed Shayan</Link>
        </div>
        <div className="text-sm max-md:mt-4">
          Shayan 2023 all right reserved
        </div>
        <ul className="flex space-x-8 text-xl max-md:mt-4">
          <Link href="https://www.instagram.com/syed_m_shayan/"><BsInstagram className='text-gray-500 hover:text-blue-500' /></Link>
          <Link href="https://www.facebook.com/battlewar.gaming.9"><BsFacebook className='text-gray-500 hover:text-blue-500'/></Link>
          <Link href="https://github.com/Syed-Shayan-01"><BsGithub className='text-gray-500 hover:text-blue-500'/></Link>
          <Link href="https://www.linkedin.com/in/thesyedshayan/"><BsLinkedin className='text-gray-500 hover:text-blue-500' /></Link>
        </ul>
      </footer>   
    </>
  )
}

export default Footer