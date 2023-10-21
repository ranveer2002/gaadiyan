import { useParams } from "react-router-dom";
import Cars from "../data";
const CarDescription = (props) => {
  const { id } = useParams();
  const car = Cars[id];
  return (
    <div className="flex items-center border rounded-md px-3 py-2 w-[700px] mx-auto mt-10">
      <div className="ml-20">
        <div className="text-normal font-semibold">{car.name}</div>
        <div className="text-green-500 text-lg font-semibold">₹{car.price}</div>
        <button className="text-white font-medium rounded-lg bg-rose-700 px-3 py-1">Buy Now</button>
      </div>
      <div>
        <img src={car.image} alt="car" loading="lazy" className="ml-20 w-[370px] h-[290px]"/>
      </div>
    </div>
  );
};
export default CarDescription;
