import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTrucks } from "../redux/truckThunks";
import { selectItems, selectLoading } from "../redux/truckSelectors";
import Filter from "../components/Filter";
import CatalogDetail from "../components/CatalogDetail";
import Button from "../components/Button";
import Loader from "../components/Loader";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const PAGE_SIZE = 4;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-start gap-6 p-4 md:flex-row md:gap-12 md:px-8">
      {/*Filter button*/}
      <button
        className="text-text-dark flex cursor-pointer items-center gap-2 md:hidden"
        onClick={() => setFilterOpen(true)}
      >
        <TuneRoundedIcon /> Filters
      </button>

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
        {loading && <Loader />}
        {items.slice(0, visible).map((truck) => (
          <CatalogDetail key={truck.id} truck={truck} />
        ))}
        {visible < items.length && (
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
