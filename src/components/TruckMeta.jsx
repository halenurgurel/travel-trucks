import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const TruckMeta = ({ rating, reviewCount, location }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <p className="text-text-dark flex items-center gap-1">
        <StarRateRoundedIcon className="text-accent -mt-1" />
        {rating} ({reviewCount} reviews)
      </p>
      <p className="text-text-dark flex items-center gap-1">
        <MapOutlinedIcon />
        {location}
      </p>
    </div>
  );
};
export default TruckMeta;
