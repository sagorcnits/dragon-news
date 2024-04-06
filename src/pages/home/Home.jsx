import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import bgImg from "../../assets/bg.png";
import Card from "../../components/Card";
import LoginWith from "../../components/LoginWith";
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
      <Logo></Logo>
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
        <div>
          <LoginWith></LoginWith>

          <div
            className="h-[500px] mt-4 flex items-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="space-y-4  text-white text-center font-poppins">
              <h1 className="text-[30px] font-bold">
                Create an Amazing Newspaper
              </h1>
              <p>
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="bg-[#D72050] px-6 py-3 text-white font-poppins font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
