const Input = ({ type = "text", name, placeholder, value, onChange, className = "", ...rest }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-bg-lighter text-text-secondary hover:text-text-dark rounded-xl px-4 py-3 outline-none ${className}`}
      {...rest}
    />
  );
};
export default Input;

/*
<div className="group relative flex items-center">
        <MapOutlinedIcon className="text-text-secondary group-focus-within:text-text-dark absolute left-3 z-10" />
        <Input placeholder="City" className="bg-white pl-10" />
      </div>

*/
