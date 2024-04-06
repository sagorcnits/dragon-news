import { FaArrowLeft } from "react-icons/fa6";
import detailsImg from "../../assets/details.png";
import Card from "../../components/Card";
import LoginWith from "../../components/LoginWith";
import Logo from "../../components/Logo";

const Details = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Logo></Logo>
      <div className="md:grid md:grid-cols-4 gap-6 my-10">
        <div className="col-span-3">
          <h1 className="text-text-title font-bold font-poppins text-[22px]">Dragon News</h1>
          <div className="mt-4 p-4 border rounded-md">
            <img className="w-full" src={detailsImg} alt="" />
            <div className="font-poppins space-y-5">
              <h1 className="font-bold pt-4 text-[23px]">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h1>
              <p>
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military aid for Kyiv as Ukraine marked its independence day six
                months after Russia invaded the country.'The United States of
                America is committed to supporting the people of Ukraine as they
                continue the fight to defend their sovereignty. As part of that
                commitment, I am proud to announce our biggest tranche of
                security assistance to date: approximately $2. Wednesday, August
                24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
                Military, News, Russia, Security, UK, Ukraine, United States,
                Worthy News (Worthy News) – U.S. President Joe Biden has
                announced nearly $3 billion in new U.S. military aid for Kyiv as
                Ukraine marked its independence day six months after Russia
                invaded the country.'The United States of America is committed
                to supporting the people of Ukraine as they continue the fight
                to defend their sovereignty. As part of that commitment, I am
                proud to announce our biggest tranche of security assistance to
                date: approximately $2.
              </p>
              <button className="bg-[#D72050] px-6 py-3 text-white font-poppins font-bold flex items-center gap-2">
              <FaArrowLeft></FaArrowLeft>  All news in this category
              </button>
            </div>
          </div>
          <div className="mt-4">
              <h1 className="text-text-title font-bold font-poppins text-[22px]">Editors Insight</h1>
              <div className="md:grid md:grid-cols-3 gap-6">
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
              </div>
          </div>
        </div>
        <div>
          <LoginWith></LoginWith>
        </div>
      </div>
    </div>
  );
};

export default Details;
