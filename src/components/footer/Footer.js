import Link from 'next/link'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Logo from '../logo/Logo'

const Footer = () => {
  return (
    <footer className="flex items-center justify-around my-10 max-md:flex-col">
      <div className="text-xl sm:text-3xl font-bold mb-4 ">
        <Logo text={'Syed Shayan'} />
      </div>
      <div className="text-sm mt-2 sm:mt-0">
        Shayan 2023 all rights reserved
      </div>
      <ul className="flex space-x-8 mt-2 sm:mt-0 text-2xl">
        <li>
          <Link href="https://www.instagram.com/syed_m_shayan/">
            <span className="text-gray-500 hover:text-blue-500">
              <BsInstagram />
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/battlewar.gaming.9">
            <div className="text-gray-500 hover:text-blue-500">
              <BsFacebook />
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Syed-Shayan-01">
            <span className="text-gray-500 hover:text-blue-500">
              <BsGithub />
            </span>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/thesyedshayan/">
            <span className="text-gray-500 hover:text-blue-500">
              <BsLinkedin />
            </span>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
