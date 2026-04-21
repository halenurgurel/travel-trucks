import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearFilters, setFilters } from "../redux/truckSlice";
import { fetchTrucks } from "../redux/truckThunks";
import Input from "../components/Input";
import Button from "../components/Button";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const initialLocal = {
  location: "",
  form: "",
  engine: "",
  transmission: "",
  features: [],
};

const Filter = ({ onClose }) => {
  const dispatch = useDispatch();
  const [local, setLocal] = useState(initialLocal);

  const handleSearch = () => {
    dispatch(setFilters(local));
    dispatch(fetchTrucks(local));
    onClose?.();
  };

  const handleClear = () => {
    setLocal(initialLocal);
    dispatch(clearFilters());
    dispatch(fetchTrucks());
  };

  const toggleFeature = (key) => {
    setLocal((prev) => ({
      ...prev,
      features: prev.features.includes(key)
        ? prev.features.filter((f) => f !== key)
        : [...prev.features, key],
    }));
  };

  return (
    <div className="md:bg-bg-lighter flex flex-col gap-8 p-4 md:rounded-[20px]">
      {onClose && (
        <div className="flex justify-end md:hidden">
          <button onClick={onClose}>
            <CloseRoundedIcon />
          </button>
        </div>
      )}

      {/*Location*/}
      <div className="flex flex-col gap-4">
        <label className="text-text-secondary">Location</label>
        <div className="group relative flex items-center">
          <MapOutlinedIcon className="text-text-secondary group-focus-within:text-text-dark absolute left-3 z-10" />
          <Input
            placeholder="City"
            className="bg-white pl-10"
            value={local.location}
            onChange={(e) => setLocal({ ...local, location: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
      </div>

      {/*Filters*/}
      <div className="flex flex-col gap-8">
        <h3 className="text-text-dark text-[20px] font-semibold">Filters</h3>

        {/*Camper Form*/}
        <div className="flex flex-col gap-1">
          <p className="text-text-secondary">Camper form</p>
          {[
            { label: "Alcove", value: "alcove" },
            { label: "Panel Truck", value: "panelTruck" },
            { label: "Fully Integrated", value: "fullyIntegrated" },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="radio"
                name="camperForm"
                value={value}
                checked={local.form === value}
                onChange={() => setLocal({ ...local, form: value })}
                className="accent-primary-light h-5 w-5 cursor-pointer"
              />
              {label}
            </label>
          ))}
        </div>

        {/*Engine*/}
        <div className="flex flex-col gap-1">
          <p className="text-text-secondary">Engine</p>
          {["Diesel", "Petrol", "Hybrid", "Electric"].map((eng) => (
            <label key={eng} className="flex items-center gap-2">
              <input
                type="radio"
                name="engine"
                value={eng}
                checked={local.engine === eng}
                onChange={() => setLocal({ ...local, engine: eng })}
                className="accent-primary-light h-5 w-5 cursor-pointer"
              />
              {eng}
            </label>
          ))}
        </div>

        {/*Transmission*/}
        <div className="flex flex-col gap-1">
          <p className="text-text-secondary">Transmission</p>
          {["Automatic", "Manual"].map((trans) => (
            <label key={trans} className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value={trans}
                checked={local.transmission === trans}
                onChange={() => setLocal({ ...local, transmission: trans })}
                className="accent-primary-light h-5 w-5 cursor-pointer"
              />
              {trans}
            </label>
          ))}
        </div>

        {/*Features*/}
        <div className="flex flex-col gap-1">
          <p>Features</p>
          {[
            "AC",
            "bathroom",
            "kitchen",
            "TV",
            "radio",
            "refrigerator",
            "microwave",
            "gas",
            "water",
          ].map((key) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={local.features.includes(key)}
                onChange={() => toggleFeature(key)}
                className="accent-primary-light h-5 w-5 cursor-pointer"
              />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>

        {/*Buttons*/}
        <div className="flex flex-col gap-4">
          <Button onClick={handleSearch}>Search</Button>
          <Button variant="outline" onClick={handleClear}>
            <span className="flex items-center justify-center gap-1">
              <CloseRoundedIcon /> Clear Filters
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
