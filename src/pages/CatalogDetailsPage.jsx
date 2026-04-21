import TruckGallery from "../components/TruckGallery";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTruckById } from "../redux/truckThunks";
import { selectSelectedTruck, selectLoading } from "../redux/truckSelectors";
import Loader from "../components/Loader";
import VehicleDetails from "../components/VehicleDetails";
import Reviews from "../components/Reviews";
import BookingForm from "../components/BookingForm";

const AdDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truck = useSelector(selectSelectedTruck);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTruckById(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (!truck) return null;

  return (
    <div className="flex flex-col gap-7 p-4">
      <div className="bg- flex flex-row justify-between gap-4">
        <TruckGallery gallery={truck.gallery} />
        <VehicleDetails truck={truck} />
      </div>

      {/*Reviews and Booking Form*/}
      <div className="flex flex-row justify-between gap-5">
        <Reviews truck={truck} />
        <BookingForm />
      </div>
    </div>
  );
};
export default AdDetailsPage;
