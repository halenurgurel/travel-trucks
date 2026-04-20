import logo from "../assets/logo.svg";
import NavLinks from "./NavLinks";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-bg-lighter border-bg-light flex justify-between border-b px-16 py-6">
      <Link to="/">
        <img src={logo} alt="TravelTrucks" />
      </Link>

      <NavLinks />
    </div>
  );
};
export default Navbar;
