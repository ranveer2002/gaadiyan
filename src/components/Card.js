import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const car = props.car;
  return (
    <div className="border shadow-xl w-[340px]  ml-20 hover:transition-all 5s ease">
      <img src={car.image} alt="car" loading="lazy" className="h-[250px]" />
      <p className="text-lg font-medium ml-10">{car.name}</p>
      <p className="text-green-500 text-lg font-medium ml-10">₹{car.price}</p>
      <button  onClick={()=>navigate("/cardescription")}
      className="text-white font-medium rounded-lg bg-rose-700 px-2 py-1 mb-2 ml-10">
        Buy now
      </button>
    </div>
  );
};
export default Card;
