import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import bgsignup from "../assets/signup.png"
const Signup = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("success");
    navigate("/");
  };

  return (
    <div className="relative mx-auto">
      <form
        method="POST"
        onSubmit={submitHandler}
        className="absolute flex justify-center itmes-center w-[340px] h-[530px] gap-y-5 px-5 py-10 mt-10 ml-20"
      >
        <div className="">
          <label className="w-full">
            <input
              required
              type="text"
              name="fullname"
              onChange={changeHandler}
              value={formData.fullname}
              placeholder="Enter your name"
              className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium w-full px-[8px] py-[12px] border-2 bg-transparent"
            />
          </label>
          <label className="w-full ">
            <input
              required
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              onChange={changeHandler}
              value={formData.phone}
              placeholder="Enter your number"
              className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium w-full px-[8px] py-[12px] mt-4 border-2 bg-transparent"
            />
          </label>
          <label className="w-full ">
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              placeholder="Enter your email"
              className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium w-full px-[8px] py-[12px] mt-4 border-2 bg-transparent"
            />
          </label>
          <label className="w-full relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              minlength="8"
              maxlength="20"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Enter your password"
              className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium w-full px-[8px] py-[12px] mt-4 border-2 bg-transparent"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[1px] text-black cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <input
              required
              type={showCPassword ? "text" : "password"}
              name="cPassword"
              minlength="8"
              maxlength="20"
              onChange={changeHandler}
              value={formData.cPassword}
              placeholder="Enter your password again"
              className="justify-center items-center rounded-[0.5rem] outline-none text-white font-medium w-full px-[8px] py-[12px] mt-4 border-2 bg-transparent"
            />
            <span
              onClick={() => setShowCPassword((prev) => !prev)}
              className="absolute right-3 top-[1px] text-black cursor-pointer"
            >
              {showCPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <button className="bg-rose-500 mt-[20px] w-full rounded-[8px] font-medium text-white px-[12px] py-[10px] hover:bg-rose-700 transition all 1s ease">
            Create Account
          </button>
        </div>
      </form>
      <div>
        <img
          src={bgsignup}
          alt="login"
          loading="lazy"
          className="w-full"
        />
      </div>
      
    </div>
  );
};

export default Signup;
