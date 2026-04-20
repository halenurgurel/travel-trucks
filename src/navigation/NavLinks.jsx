import clsx from "clsx";
import { NavLink } from "react-router-dom";

const activeClass = "font-medium text-primary-light";
const inactiveClass = "font-medium text-text-dark";
const links = [
  { to: "/", label: "Home", end: true },
  { to: "/catalog", label: "Catalog", end: true },
];

const NavLinks = ({ onNavigate }) => {
  return (
    <div className="flex items-center gap-8">
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            clsx(isActive ? activeClass : inactiveClass)
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
export default NavLinks;
