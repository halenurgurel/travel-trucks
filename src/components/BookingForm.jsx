import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { toast } from "sonner";
import DatePicker from "./DatePicker";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: null,
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Booking confirmed! We will contact you soon.");
    setForm({ name: "", email: "", date: null, comment: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border mt-12 flex flex-col justify-center gap-3 rounded-2xl border p-10"
    >
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
      <DatePicker
        selected={form.date}
        onSelect={(date) => setForm({ ...form, date })}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};
export default BookingForm;
