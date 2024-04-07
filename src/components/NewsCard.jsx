import { CiBookmark, CiShare2 } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id,rating, total_view, title, author, image_url, details } = news;
  return (
    <Link to={`/details/${_id}`}>
      <div className="mt-4 border font-poppins rounded-sm cursor-pointer">
        <div className="bg-[#E7E7E7] p-4 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <img src={author.img} alt="" />
            </div>
            <div>
              <h1>{author.name}</h1>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-[20px]">
            <CiBookmark className="cursor-pointer"></CiBookmark>
            <CiShare2 className="cursor-pointer"></CiShare2>
          </div>
        </div>
        {/* card body  */}
        <div className="p-4">
          <h1 className="font-bold text-text-title py-4">{title}</h1>
          <img src={image_url} alt="" />
          <p className="py-4 border-b">
            {details.slice(0, 400)}
            <br />
            <span className="text-red-500 cursor-pointer ">... Read More</span>
          </p>
          {/* card description  */}
          <div className="flex justify-between py-4">
            <div className="flex gap-2 items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span>{rating.number}</span>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineRemoveRedEye className="text-[20px]"></MdOutlineRemoveRedEye>
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
