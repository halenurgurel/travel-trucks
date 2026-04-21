import { featureIcons, formLabels } from "../constants/features";
import FavoriteButton from "./FavoriteButton";
import TruckMeta from "./TruckMeta";

const VehicleDetails = ({ truck }) => {
  const badges = Object.entries(featureIcons).filter(([key]) => {
    const value = truck[key];
    if (typeof value === "boolean") return value === true;
    return !!value;
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-bg-lighter flex flex-col gap-4 rounded-2xl p-4">
        <div className="flex flex-row gap-5">
          <h2 className="text-text-dark text-2xl font-semibold">
            {truck.name}
          </h2>
          <FavoriteButton truckId={truck.id} className="-mt-2" />
        </div>

        <TruckMeta
          rating={truck.rating}
          reviewCount={truck.reviews.length}
          location={truck.location}
        />

        <p className="text-text-dark shrink-0 text-2xl font-semibold">
          €{truck.price.toFixed(2)}
        </p>
        <p className="text-text-medium">{truck.description}</p>
      </div>

      <div className="bg-bg-lighter flex flex-col gap-4 rounded-2xl p-4">
        <h2 className="text-text-dark text-2xl font-semibold">
          Vehicle Details
        </h2>

        <div className="flex flex-wrap gap-2">
          {badges.map(([key, { icon }]) => {
            const value = truck[key];
            const label =
              key === "form"
                ? (formLabels[value] ?? value)
                : typeof value === "boolean"
                  ? featureIcons[key].label
                  : value;
            return (
              <span
                key={key}
                className="bg-bg-light flex flex-row items-center gap-1 rounded-full px-4 py-2 text-sm font-medium"
              >
                {icon} {label}
              </span>
            );
          })}
        </div>
        <hr className="border-border" />

        <div className="flex flex-col gap-2">
          {[
            { label: "Form", value: formLabels[truck.form] ?? truck.form },
            { label: "Length", value: truck.length },
            { label: "Width", value: truck.width },
            { label: "Height", value: truck.height },
            { label: "Tank", value: truck.tank },
            { label: "Consumption", value: truck.consumption },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-row justify-between">
              <p>{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VehicleDetails;
