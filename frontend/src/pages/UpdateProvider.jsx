import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import update from "../assets/update.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const UpdateProvider = ({ show }) => {
  const { email } = useParams();
  const [isLarge, setIsLarge] = useState(window.innerWidth > 640);
  const [formData, setFormData] = useState({
    number: "",
    isAvaliable: false,
    work: "",
    price :""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!formData.number || !formData.work) {
      toast.error("❌ Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.HOST_URL}/api/v1/provider-details/${email}`,
        formData
      );
      toast.success("🦄 Details Added Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("❌ Something went wrong! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`bg-[#f3edeb] shadow-lg rounded flex justify-center items-center flex-col sm:flex-row ${
        isLarge
          ? "absolute top-[25%] lg:left-[25%] lg:w-[50vw] sm:h-[60vh]"
          : "relative w-[100vw] h-[100%]"
      }`}
    >
      <div className="flex justify-center items-center">
        <img src={update} alt="Update Illustration" className="w-96 h-96" />
      </div>
      <div className="flex justify-center items-center flex-col p-4 shadow-lg sm:me-14">
        <div className="flex justify-end">
          <button
            className="flex w-max justify-end"
            onClick={() => show(false)} 
          >
            <CloseIcon
              className=""
              style={{
                background: "#fff",
                padding: "4px",
                borderRadius: "50%",
              }}
            />
          </button>
        </div>
        <h1 className="text-3xl font-mono my-3 text-center sm:text-left">
          Update Details 👋
        </h1>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center sm:items-start overflow-hidden"
        >
          <TextField
            id="number"
            label="Phone Number"
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
            name="number"
            type="number"
            required
            onChange={handleOnChange}
            value={formData.number}
          />
          <TextField
            id="price"
            label="Price Charged"
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
            name="price"
            type="number"
            required
            onChange={handleOnChange}
            value={formData.price}
          />
          <br />
          <FormControl
            variant="filled"
            style={{ width: "60%", margin: "1% 0" }}
          >
            <Select
              id="work"
              name="work"
              value={formData.work}
              onChange={handleOnChange}
              displayEmpty
              inputProps={{ "aria-label": "Select Work" }}
            >
              <MenuItem value="" disabled>
                Select Work
              </MenuItem>
              <MenuItem value="Cleaner">Cleaner</MenuItem>
              <MenuItem value="Carpenter">Carpenter</MenuItem>
              <MenuItem value="Mechanic">Mechanic</MenuItem>
              <MenuItem value="Electrician">Electrician</MenuItem>
              <MenuItem value="Plumber">Plumber</MenuItem>
            </Select>
          </FormControl>
          <br />
          <div className="flex text-base font-medium sm:justify-start justify-center">
            <div className="flex items-center me-14 w-max">
              <input
                type="radio"
                id="available-yes"
                name="isAvaliable"
                value={true}
                checked={formData.isAvaliable === true}
                onChange={handleOnChange}
              />
              <label htmlFor="available-yes" className="ml-2">
                Yes
              </label>
            </div>
            <div className="flex items-center w-max">
              <input
                type="radio"
                id="available-no"
                name="isAvaliable"
                value={false}
                checked={formData.isAvaliable === false}
                onChange={handleOnChange}
              />
              <label htmlFor="available-no" className="ml-2">
                No
              </label>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded w-max my-4 hover:bg-blue-500"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProvider;
