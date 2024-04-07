import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../../components/Card";
import LoginWith from "../../components/LoginWith";
import Logo from "../../components/Logo";

const Details = () => {
  const paramsId = useParams();
  const allNewsData = useLoaderData();
  const findData = allNewsData.find((news) => news._id === paramsId.id);

  return (
    <div className="max-w-6xl mx-auto">
      <Logo></Logo>
      <div className="md:grid md:grid-cols-4 gap-6 my-10">
        <div className="col-span-3">
          <h1 className="text-text-title font-bold font-poppins text-[22px]">
            Dragon News
          </h1>
          <div className="mt-4 p-4 border rounded-md">
            <img className="w-full" src={findData.image_url} alt="" />
            <div className="font-poppins space-y-5">
              <h1 className="font-bold pt-4 text-[23px]">{findData.title}</h1>
              <p className="py-6">{findData.details}</p>
              <Link to="/" className="mt-4">
                <button className="bg-[#D72050] px-6 py-3 text-white font-poppins font-bold flex items-center gap-2">
                  <FaArrowLeft></FaArrowLeft> All news in this category
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-text-title font-bold font-poppins text-[22px]">
              Editors Insight
            </h1>
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
