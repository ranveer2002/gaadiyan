import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CarDetailsForm = () => {
  const navigate = useNavigate();
  const [carDetail, setCarDetail] = useState({
    carNumber: "",
    ownerName: "",
    phone: "",
    brand: "",
    yearOfManufacturing: "",
    location: "",
    model: "",
    kmDriven: "",
  });
  const [rc, setRc] = useState([]);
  const [carImages, setCarImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setCarImages([...carImages, ...files]);
  };
  function changeHandler(e) {
    setCarDetail({ ...carDetail, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
    toast.success(
      "Thanks for filling Details & we will verify & get back to you"
    );
    navigate("/");
  }
  return (
    <div className="border w-[510px] mx-auto mt-4 shadow-xl">
      <p className="text-3xl font-bold opacity-70 ml-24 mt-2">
        Enter your car details
      </p>
      <form
        onSubmit={submitHandler}
        method="POST"
        className="ml-12 mt-3 space-y-2 mb-4"
      >
        <input
          required
          type="text"
          maxLength={10}
          name="carNumber"
          onChange={changeHandler}
          value={carDetail.carNumber}
          placeholder="Vehicle No."
          className="border border-slate-500 rounded-md uppercase px-2 py-1 outline-none"
        />
        <input
          required
          type="text"
          name="ownerName"
          onChange={changeHandler}
          value={carDetail.ownerName}
          placeholder="Enter your name"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none ml-4"
        />
        <input
          required
          type="tel"
          maxLength={10}
          name="phone"
          onChange={changeHandler}
          value={carDetail.phone}
          placeholder="Enter phone no."
          className="border border-slate-500 rounded-md px-2 py-1 outline-none"
        />
        <input
          required
          type="text"
          name="brand"
          onChange={changeHandler}
          value={carDetail.brand}
          placeholder="choose brand"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none ml-4"
        />
        <input
          required
          type="text"
          maxLength={4}
          name="yearOfManufacturing"
          onChange={changeHandler}
          value={carDetail.yearOfManufacturing}
          placeholder="Year of manufacturing"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none"
        />
        <input
          required
          type="text"
          name="owner"
          onChange={changeHandler}
          value={carDetail.owner}
          placeholder="owner"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none ml-4"
        />
        <input
          required
          type="text"
          name="model"
          onChange={changeHandler}
          value={carDetail.model}
          placeholder="model like swift , Dzire"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none"
        />
        <input
          required
          type="text"
          name="kmDriven"
          onChange={changeHandler}
          value={carDetail.kmDriven}
          placeholder="Kilometers"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none ml-4"
        />
        <label htmlFor="rc" className="text-slate-500 font-semibold ml-3">
          Vehicle RC
        </label>
        <input
          required
          type="file"
          id="rc"
          name="rc"
          onChange={(e) => {
            setRc(e.target.value);
          }}
          value={rc}
          title="vehicle RC"
          className="border border-slate-500 rounded-md px-2 py-1 outline-none mt-2 ml-4"
        />
        <label htmlFor="carimage" className="text-slate-500 font-semibold ml-6">
          CarImages
        </label>
        <input
          type="file"
          id="carimage"
          multiple
          onChange={handleImageUpload}
          className="border border-slate-500 rounded-md px-2 py-1 outline-none mt-2 ml-1"
        />
        <button className="px-5 py-1 text-lg bg-rose-700 text-white font-semibold rounded-md ml-40">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarDetailsForm;
