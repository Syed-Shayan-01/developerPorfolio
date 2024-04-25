import Link from "next/link";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import Logo from "../logo/Logo";

const Media = () => {
  return (
    <div className="text-center mt-14">
      <div className="mb-6 md:mb-12">
        <Logo text="Social Media Accounts" />
      </div>
      <ul
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
        className="flex md:justify-around justify-center items-center text-4xl md:text-5xl
       text-gray-500 space-x-6 md:space-x-8"
      >
        <li className="hover:text-red-500 duration-300 hover:scale-125">
          <Link href={"https://www.instagram.com/syed_m_shayan/"}>
            <AiOutlineInstagram />
          </Link>
        </li>
        <li className="hover:text-blue-700 duration-300 hover:scale-125">
          <Link href={"https://www.facebook.com/battlewar.gaming.9"}>
            <AiFillFacebook />
          </Link>
        </li>
        <li className="hover:text-black duration-300 hover:scale-125">
          <Link href={"https://github.com/Syed-Shayan-01"}>
            <AiFillGithub />
          </Link>
        </li>
        <li className="hover:text-blue-800 duration-300 hover:scale-125">
          <Link href={"https://www.linkedin.com/in/thesyedshayan/"}>
            <AiFillLinkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Media;
