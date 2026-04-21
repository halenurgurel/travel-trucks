import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/truckSlice";
import { selectFavorites } from "../redux/truckSelectors";

const FavoriteButton = ({ truckId, className = "" }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(truckId);

  return (
    <button
      onClick={() => dispatch(toggleFavorite(truckId))}
      className={`cursor-pointer ${className}`}
    >
      {isFavorite ? (
        <FavoriteRoundedIcon className="text-primary-light" />
      ) : (
        <FavoriteBorderRoundedIcon className="text-primary-light" />
      )}
    </button>
  );
};
export default FavoriteButton;
