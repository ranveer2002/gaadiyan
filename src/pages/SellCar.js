import sellcarimage from "../assets/sellcarimage.webp";
import getprice from "../assets/getprice.webp";
import carinspection from "../assets/carinspection.jpg";
import payment from "../assets/payment.webp";
import { useNavigate } from "react-router-dom";

const SellCar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex bg-slate-50">
        <div className="ml-60 mt-24">
          <p className="text-4xl font-bold opacity-70">
            Sell your car at best price
          </p>
          <p className="text-4xl font-bold opacity-70">instantly from home</p>
          <button
            onClick={() => {
              navigate("/sellcar/form");
            }}
            className="mt-4 px-5 py-1 text-lg bg-rose-700 text-white font-semibold rounded-md"
          >
            Sell Car
          </button>
        </div>
        <div>
          <img src={sellcarimage} alt="sellcarimage" loading="lazy" />
        </div>
      </div>
      <div>
        <p className="ml-16 mt-5 text-4xl font-bold opacity-70">
          Process of selling cars
        </p>
        <div className="flex justify-around items-center mt-3">
          <div className="w-[330px] border rounded-xl shadow-lg">
            <img
              src={getprice}
              alt=""
              loading="lazy"
              className="w-full h-full rounded-t-xl"
            />
            <p className="text-2xl font-bold opacity-70 mt-1 ml-2">
              Get price online
            </p>
            <p className="text-slate-700 opacity-70 font-medium mt-2 ml-2 mb-2">
              Answer some questions about your car to help us understand its
              condition
            </p>
          </div>
          <div className="w-[330px] border rounded-xl shadow-lg">
            <img
              src={carinspection}
              alt=""
              loading="lazy"
              className="w-full rounded-t-xl"
            />
            <p className="text-2xl font-bold opacity-70 mt-1 ml-2">
              Car inspection
            </p>
            <p className="text-slate-700 opacity-70 font-medium mt-2 ml-2 mb-2">
              Our car expert physically verifies your car’s condition and we'll
              give you the final offer
            </p>
          </div>
          <div className="w-[330px] border rounded-xl shadow-lg">
            <img
              src={payment}
              alt=""
              loading="lazy"
              className="w-full rounded-t-xl"
            />
            <p className="text-2xl font-bold opacity-70 mt-1 ml-2">
              Hustle free payment
            </p>
            <p className="text-slate-700 opacity-70 font-medium mt-2 ml-2 mb-2">
              We will transfer the amount directly to your bank account before
              your car is picked up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellCar;
