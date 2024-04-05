import Marquee from "react-fast-marquee";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import ellips from "../../assets/Ellipse 1.png";
import Logo from "../../components/Logo";
import Navbar from "../shered/Navbar";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center items-center my-6">
        <Logo></Logo>
      </div>
      <div className="bg-[#F3F3F3] flex gap-5 items-center p-4 rounded-sm">
        <button className="px-7 py-2 bg-[#D72050] text-white font-poppins">
          Latest
        </button>
        <Marquee className="text-[#403F3F] font-bold" pauseOnHover={true}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 ">
        <div>
          <h1 className="text-text-title font-bold"> All Caterogy</h1>
          <ul className="mt-4">
            <NavLink>
              <li className="bg-[#E7E7E7] p-4 text-center font-bold rounded-sm mt-1">
                National news
              </li>
            </NavLink>
            <NavLink>
              <li className="bg-[#E7E7E7] p-4 text-center font-bold rounded-sm mt-1">
                National news
              </li>
            </NavLink>
            <NavLink>
              <li className="bg-[#E7E7E7] p-4 text-center font-bold rounded-sm mt-1">
                National news
              </li>
            </NavLink>
            <NavLink>
              <li className="bg-[#E7E7E7] p-4 text-center font-bold rounded-sm mt-1">
                National news
              </li>
            </NavLink>
            <NavLink>
              <li className="bg-[#E7E7E7] p-4 text-center font-bold rounded-sm mt-1">
                National news
              </li>
            </NavLink>
            <NavLink>
              <li className="bg-[#E7E7E7] p-4 text-center font-bold rounded-sm mt-1">
                National news
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="col-span-2">
          <h1>Dragon News Home</h1>
          <div className="bg-[#E7E7E7] mt-4 p-4 font-poppins">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div>
                  <img src={ellips} alt="" />
                </div>
                <div>
                  <h1>Awlad Hossain</h1>
                  <p>2022-08-21</p>
                </div>
              </div>
              <div className="flex gap-2 items-center text-[20px]">
                <CiBookmark className="cursor-pointer"></CiBookmark>
                <CiShare2 className="cursor-pointer"></CiShare2>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-400">Login With</div>
      </div>
    </div>
  );
};

export default Home;
