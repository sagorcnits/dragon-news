import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import Navbar from "../shered/Navbar";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
const navigate = useNavigate()

const location = useLocation()
console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    loginUser(email, password)
      .then(res => {
        const user = res.user;
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => alert("Please Correct Infor"));
  };

  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Navbar></Navbar>
      <div className="hero ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl font-poppins">
          <h1 className="text-center text-text-title text-[20px] font-bold mt-6">
            Login your account
          </h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control border-t pt-3">
              <label className="label">
                <span className="label-text font-bold">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn bg-[#403F3F] text-white">Login</button>
            </div>
            <p>
              Dont’t Have An Account ?{" "}
              <Link to="/register" className="text-red-500 cursor-pointer">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
