import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { featureIcons, formLabels } from "../constants/features";
import Button from "./Button";

const AdDetail = ({ truck }) => {
  console.log(truck.form);
  return (
    <div className="bg-bg-lighter flex flex-col gap-6 rounded-3xl p-4 sm:flex-row md:flex-col lg:flex-row">
      <img
        src={truck.gallery[0].thumb}
        className="h-48 w-full shrink-0 rounded-2xl object-cover sm:h-60 sm:w-55 md:w-full lg:h-60 lg:w-55"
      />

      <div className="flex min-w-0 flex-col gap-2">
        {/*Name and Price*/}
        <div className="flex flex-row justify-between gap-4 sm:flex-col lg:flex-row">
          <h2 className="text-text-dark min-w-0 text-2xl font-semibold">
            {truck.name}
          </h2>
          <p className="text-text-dark shrink-0 text-2xl font-semibold">
            €{truck.price.toFixed(2)}
          </p>
        </div>

        {/*Review and location*/}
        <div className="flex flex-row items-center gap-5">
          <p className="text-text-dark flex items-center">
            <StarRateRoundedIcon className="text-accent -mt-1" />
            {truck.rating} ({truck.reviews.length} reviews)
          </p>
          <p className="text-text-dark flex items-center gap-1">
            <MapOutlinedIcon />
            {truck.location}
          </p>
        </div>

        {/*description*/}
        <p className="text-text-medium ml-2 line-clamp-1">
          {truck.description}
        </p>

        {/*badges*/}
        <div className="flex flex-row flex-wrap gap-2">
          {["engine", "transmission", "form"].map((key) => {
            const value = truck[key];
            const feature = featureIcons[key];

            if (!value || !feature) return null;

            const label = key === "form" ? (formLabels[value] ?? value) : value;

            return (
              <span
                key={key}
                className="bg-bg-light text-text-dark flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium"
              >
                {feature.icon} {label}
              </span>
            );
          })}
        </div>

        <div className="mt-2 mb-2">
          <Button
            to={`/catalog/${truck.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AdDetail;
