import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card";
import Logo from "../../components/Logo";
import NewsCard from "../../components/NewsCard";
import Navbar from "../shered/Navbar";

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("../public/data/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  //  console.log(categoryData)

  useEffect(() => {
    fetch("../public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto pb-20">
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
      <div className="md:grid md:grid-cols-4 gap-6 ">
        <div>
          <h1 className="text-text-title font-bold"> All Caterogy</h1>
          <ul className="mt-4">
            {categoryData.map((category, id) => {
              return (
                <NavLink to={`/news/${category.id}`}>
                  <li
                    key={id}
                    className="p-2 text-center font-bold rounded-sm  text-paragraph hover:bg-black"
                  >
                    {category.name}
                  </li>
                </NavLink>
              );
            })}
          </ul>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="col-span-2 font-poppins">
          <h1 className="text-text-title font-bold">Dragon News Home</h1>
          {newsData.slice(0, 4).map((news, id) => (
            <NewsCard key={id} news={news}></NewsCard>
          ))}
        </div>
        <div className="font-poppins">
          <h1 className="font-bold text-text-title">Login With</h1>
          <div  className="mt-4">
            <button className="flex gap-2 items-center border py-2 px-7 w-full text-center"> <IoLogoGoogle></IoLogoGoogle> Login With Google</button>
            <button className="flex gap-2 mt-4 items-center border py-2 px-7 w-full text-center"> <FaGithub></FaGithub> Login With Github</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
