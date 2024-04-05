import card1Img from "../../src/assets/1.png";

const Card = () => {
  return (
    <div className="card card-compact border-b mt-3 cursor-pointer">
      <figure>
        <img className="w-full" src={card1Img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
      </div>
    </div>
  );
};

export default Card;
