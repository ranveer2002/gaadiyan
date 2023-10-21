import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import bglogin from "../assets/login.png"

function Login(props) {
  let setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In Successfully");
    navigate("/");
  };

  return (
    <div className=" relative shadow-6xl mx-auto">
      <form
        onSubmit={submitHandler}
        method="POST"
        className="absolute flex flex-col w-[320px] mt-28 gap-y-5 ml-[1000px]  px-5 py-10 bg-transparent"
      >
        <label className="mb-1 leading-[1.375rem]">
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email"
            className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium w-full px-[8px] py-[12px] border-2 bg-transparent"
          />
        </label>

        <label className="w-full relative mb-1 leading-[1.375rem]">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium border-2 w-full px-[8px] py-[12px] bg-transparent"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-black cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <Link to="#">
          <p className="text-white text-sm -mt-3  max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>

        <button className="bg-rose-500 rounded-[8px] font-medium text-white px-[12px] py-[8px] hover:bg-rose-700 transition all 1s ease">
          Sign In
        </button>
      </form>
      <img
        src={bglogin}
        alt="login"
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}

export default Login;
