import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { TbBrandTwitterFilled } from "react-icons/tb";
import quik1Img from "../assets/qZone1.png";
import quik2Img from "../assets/qZone2.png";
import quik3Img from "../assets/qZone3.png";
const LoginWith = () => {
  return (
    <div className="font-poppins mt-4 md:mt-0">
      <h1 className="font-bold text-text-title">Login With</h1>
      <div className="mt-4">
        <button className="flex gap-2 items-center border py-2 px-7 w-full text-center">
          <IoLogoGoogle></IoLogoGoogle> Login With Google
        </button>
        <button className="flex gap-2 mt-4 items-center border py-2 px-7 w-full text-center">
          <FaGithub></FaGithub> Login With Github
        </button>
      </div>
      {/* fins us on */}
      <h1 className="text-text-title py-4 mt-4 font-bold">Find Us On</h1>
      <div className="border rounded-sm font-poppins text-text-title">
        <div className=" border-b p-3 ">
          <div className="flex items-center gap-2">
            <FaFacebookF></FaFacebookF>
            <p>Facebook</p>
          </div>
        </div>
        <div className="border-b p-3 ">
          <div className="flex items-center gap-2">
            <TbBrandTwitterFilled></TbBrandTwitterFilled>
            <p>Twitter</p>
          </div>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2">
            <FaInstagram></FaInstagram>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      {/* Q-Zone */}
      <div className="mt-4 p-4 bg-[#F3F3F3]">
        <h1 className="font-poppins pb-4 font-bold text-text-title">Q-Zone</h1>
        <img className="mt-2 w-full" src={quik1Img} alt="" />
        <img className="mt-2 w-full" src={quik2Img} alt="" />
        <img className="mt-2 w-full" src={quik3Img} alt="" />
      </div>
    </div>
  );
};

export default LoginWith;
