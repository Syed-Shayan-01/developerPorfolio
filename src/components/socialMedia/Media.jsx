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
    <div>
        <div className="flex justify-center items-center mb-32 mt-20">
        <Logo text='Social Media Accounts' /> 
        </div>
      <ol className=" text-[3rem] flex justify-around items-center text-gray-500">
        <li className="hover:text-red-500 drop-shadow-4xl duration-300 hover:scale-150 scale-125">
          <Link href={"https://www.instagram.com/syed_m_shayan/"}>
            <AiOutlineInstagram />
          </Link>
        </li>
        <li className="hover:text-blue-700  drop-shadow-4xl duration-300 hover:scale-150 scale-125 ">
          <Link href={"https://www.facebook.com/battlewar.gaming.9"}>
            <AiFillFacebook  />
          </Link>
        </li>
        <li className="hover:text-black drop-shadow-4xl  duration-300 hover:scale-150 scale-125 ">
          <Link href={"https://github.com/Syed-Shayan-01"}>
            <AiFillGithub />
          </Link>
        </li>
        <li className="hover:text-blue-800 drop-shadow-4xl  duration-300 hover:scale-150 scale-125">
          <Link href={"https://www.linkedin.com/in/thesyedshayan/"}>
            <AiFillLinkedin />
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Media;
