import moment from "moment";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="text-center space-y-3 font-poppins"> 
      <img src={logo} alt="Logo" />
      <p>Journalism Without Fear or Favour</p>
     <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Logo;
