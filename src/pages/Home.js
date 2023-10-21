import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { Link } from "react-router-dom";
const Home = (props) => {
  const Cars = props.Cars;
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <div className="absolute ml-20 mt-7">
          <h1 className="text-red-700 text-7xl font-medium">GAADIYAA</h1>
          <hr className="mt-4"></hr>
          <p className="text-black text-2xl font-medium px-2 py-2 cursor-pointer">
            Add Cars to your Family
          </p>
          <div
            onClick={() => {
              navigate("/buycar");
            }}
            className="flex z-1 text-white text-xl w-[170px] mt-2 mb-2 ml-1 bg-rose-700 rounded-full px-5 py-2"
          >
            <button className="text-lg font-medium">Know more</button>
            <FiArrowRight className="text-white text-2xl mt-1 ml-1" />
          </div>
        </div>
        <img
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/09/Untitled-2023-09-18T132712.742.jpg?ssl=1&quality=80&w=f"
          alt="home"
          loading="lazy"
          className="w-full h-[750px]"
        />
      </div>
      <div className="mt-10">
          <div>
            <p className="text-2xl font-medium ml-20">Recommened cars for you</p>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-y-10">
        {Cars.map((car) => (
          <Link to={`/cardescription/${car.id}`}>
          <Card key={car.id} car={car}/>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
