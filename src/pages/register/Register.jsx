import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../authProvider/AuthProvider";
import Navbar from "../shered/Navbar";
const Register = () => {
  const { createUser, user } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);

  const navigate = useNavigate()

  const handleCreateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!accept) {
      alert("Please term accept")
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        alert("Email Already used")
      });
  };

  return (
    <div className="max-w-6xl min-h-screen mx-auto">
      <Navbar></Navbar>
      <div className="hero ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl font-poppins">
          <h1 className="text-center text-text-title text-[20px] font-bold mt-6">
            Register your account
          </h1>
          <form className="card-body" onSubmit={handleCreateUser}>
            <div className="form-control border-t pt-3">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
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
              <div className="form-control py-2" >
                <label className="cursor-pointer flex items-center gap-4" >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-info"
                    onClick={ () => setAccept(!accept) } />
                  <span className="label-text">Accept Term & Conditions</span>
                </label>
              </div>
            </div>
            <div className="form-control">
              <button className="btn bg-[#403F3F] text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
