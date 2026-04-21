import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="border-border mt-12 flex flex-col justify-center gap-3 rounded-2xl border p-10">
      <h2 className="text-text-dark text-xl font-semibold">
        Book your campervan now
      </h2>
      <p className="text-text-secondary">
        Stay connected! We are always ready to help you!
      </p>
      <Input
        name="name"
        placeholder="Name*"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email*"
        value={form.email}
        onChange={handleChange}
      />
      <Button>Send</Button>
    </div>
  );
};
export default BookingForm;
