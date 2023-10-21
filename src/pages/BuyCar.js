import Card from "../components/Card";
import { Link } from "react-router-dom";

const BuyCar = (props) => {
  const Cars = props.Cars;
  return (
    <div className="relative">
      <div className="absolute mt-40 ml-10">
        <p className="text-white text-7xl ">New beginnings</p>
        <p className="text-white text-6xl mt-3">in a car of your own</p>
        <div className="mt-5">
          <a
            href="#buycar"
            className="text-white text-lg w-[200px] font-medium px-5 py-2 bg-rose-700 shadow-xl rounded-lg"
          >
            Buy your car today
          </a>
        </div>
      </div>
      <img
        src="https://www.bmw.in/content/dam/bmw/common/all-models/i-series/i7/2022/Highlights/bmw-7-series-i7-sp-desktop.jpg.asset.1687171609318.jpg"
        alt=""
        loading="lazy"
      />

      <div id="buycar" className="mt-10">
        <div>
          <p className="text-2xl font-medium ml-20">Recommened cars for you</p>
        </div>
        <div className="grid grid-cols-3 mt-5 gap-y-10">
          {Cars.map((car) => (
            <Link to={`/cardescription/${car.id}`}>
              <Card key={car.id} car={car} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BuyCar;
