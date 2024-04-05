import Marquee from "react-fast-marquee";
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
    </div>
  );
};

export default Home;
