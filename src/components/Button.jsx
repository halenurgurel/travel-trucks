import { Link } from "react-router-dom";
const variants = {
  primary:
    "bg-primary-light text-white px-8 py-3 rounded-full text-base hover:bg-primary",
  outline:
    "border border-border text-text-dark rounded-full px-8 py-3 hover:border-primary",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}) => {
  const classes = `cursor-pointer ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
export default Button;
