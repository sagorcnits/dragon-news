import { CiCalendar } from "react-icons/ci";
import card1Img from "../../src/assets/1.png";
const Card = () => {
  return (
    <div className="card card-compact border-b md:border mt-3 cursor-pointer">
      <figure>
        <img className="w-full" src={card1Img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-4 items-center text-[20px] text-text-title">
          <CiCalendar></CiCalendar>
          <p>Jan 4, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
