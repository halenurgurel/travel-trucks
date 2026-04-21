import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTrucks } from "../redux/truckThunks";
import { selectItems, selectLoading, selectFavorites } from "../redux/truckSelectors";
import Filter from "../components/Filter";
import CatalogDetail from "../components/CatalogDetail";
import Button from "../components/Button";
import Loader from "../components/Loader";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const PAGE_SIZE = 4;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const favorites = useSelector(selectFavorites);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const displayed = showFavorites
    ? items.filter((t) => favorites.includes(t.id))
    : items;

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col items-start gap-6 p-4 md:flex-row md:gap-12 md:px-8">
      {/*Filter + Favorites buttons (mobile)*/}
      <div className="flex items-center gap-3 md:hidden">
        <button
          className="text-text-dark flex cursor-pointer items-center gap-2"
          onClick={() => setFilterOpen(true)}
        >
          <TuneRoundedIcon /> Filters
        </button>

        <button
          onClick={() => setShowFavorites((prev) => !prev)}
          className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 transition-colors ${
            showFavorites
              ? "border-primary-light text-primary-light"
              : "border-border text-text-secondary"
          }`}
        >
          <FavoriteRoundedIcon fontSize="small" />
          Favorites {favorites.length > 0 && `(${favorites.length})`}
        </button>
      </div>

      {/*Overlay*/}
      {filterOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setFilterOpen(false)}
        />
      )}

      {/*Drawer*/}
      <div
        className={`bg-bg-lighter fixed top-0 left-0 z-50 h-full w-90 overflow-y-auto shadow-lg transition-transform duration-300 md:static md:h-auto md:w-auto md:translate-x-0 md:overflow-visible md:bg-transparent md:shadow-none ${filterOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Filter onClose={() => setFilterOpen(false)} />
      </div>

      <div className="flex flex-col gap-6">
        {/* Favorites toggle (desktop) */}
        <button
          onClick={() => setShowFavorites((prev) => !prev)}
          className={`hidden w-fit cursor-pointer items-center gap-2 rounded-full border px-4 py-2 transition-colors md:flex ${
            showFavorites
              ? "border-primary-light text-primary-light"
              : "border-border text-text-secondary"
          }`}
        >
          <FavoriteRoundedIcon fontSize="small" />
          Favorites {favorites.length > 0 && `(${favorites.length})`}
        </button>

        {displayed.slice(0, visible).map((truck) => (
          <CatalogDetail key={truck.id} truck={truck} />
        ))}

        {visible < displayed.length && (
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CatalogPage;
