import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/catalog", label: "Catalog", end: true },
];

const Footer = () => {
  return (
    <footer className="bg-bg-lighter border-bg-light mt-auto border-t">
      <div className="px-6 py-10 md:px-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link to="/">
              <img src={logo} alt="TravelTrucks" />
            </Link>
            <p className="text-text-secondary text-sm">
              Your home on the road.
            </p>
          </div>

          <nav className="flex gap-8">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  clsx(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary-light"
                      : "text-text-dark hover:text-primary-light",
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="border-border mt-8 flex flex-col items-center gap-2 border-t pt-6 md:flex-row md:justify-between">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} TravelTrucks. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/halenurgurel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary font-medium transition-colors"
            >
              Halenur Gurel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
