import { useState } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Footer = () => {
  const [user, setUser] = useState({ email: "" });
  return (
    <div className="border mt-10 bg-slate-200 ">
      <div className="flex justify-around items-center">
        <div className="mt-14 mb-10 space-y-1">
          <div>
            <Link className="text-slate-900 font-medium">USEFUL LINKS</Link>
          </div>
          <div>
            <Link to="/contactus" className="text-slate-900">
              Contact Us
            </Link>
          </div>
          <div>
            <Link className="text-slate-900">About Us</Link>
          </div>
          <div>
            <Link className="text-slate-900">Testimonials</Link>
          </div>
        </div>
        <div className=" space-y-1">
          <p className="text-slate-900 font-medium">KEEP IN TOUCH</p>
          <div className="flex space-x-2">
            <AiFillFacebook className="text-2xl hover:text-blue-900 transition-all 3s ease" />
            <FaInstagramSquare className="text-2xl hover:text-rose-900 transition-all 3s ease" />
            <FaXTwitter className="text-[22px] hover:text-black transition-all 3s ease" />
            <AiFillLinkedin className="text-2xl hover:text-blue-900 transition-all 3s ease" />
            <AiFillYoutube className="text-3xl -mt-1 hover:text-red-900 transition-all 3s ease" />
          </div>
        </div>

        <div className=" space-y-2">
          <p className="text-slate-900 font-medium">SUBSCRIBE</p>
          <p className="text-slate-900">Get more updates & free Resources</p>

          <div className="relative flex border w-[275px] shadow-md">
            <form>
              <input
                required
                type="email"
                name="email"
                onChange={(e) => {
                  setUser({ ...user, [e.target.name]: e.target.value });
                }}
                value={user.email}
                placeholder="Enter Email Here"
                className="text-slate-900 w-[240px] outline-none px-2 py-1"
              />
              <button
                onClick={() => {
                  toast.success("Thanks for joining us");
                }}
                className="absolute bg-rose-700 text-white font-medium px-2 py-1 right-0"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-slate-900 ml-[135px]">
        Privacy Policy | Terms & Conditions
      </p>
      <hr className="bg-slate-400 h-[2px] mt-2"></hr>
      <p className="text-slate-500 ml-[580px] mt-2 mb-2">
        copyright © 2023 Gaadiyaa
      </p>
    </div>
  );
};

export default Footer;
