import { DayPicker } from "react-day-picker";
import { useState, useRef, useEffect } from "react";
import { enGB } from "react-day-picker/locale";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const DatePicker = ({ selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatted = selected ? selected.toLocaleDateString("en-GB") : "";

  return (
    <div ref={ref}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-bg-lighter flex cursor-pointer items-center rounded-xl px-4 py-3"
      >
        <input
          readOnly
          placeholder="Booking Date*"
          value={formatted}
          className="text-text-secondary w-full cursor-pointer bg-transparent outline-none"
        />
        <CalendarTodayIcon className="text-text-secondary shrink-0" style={{ fontSize: 18 }} />
      </div>

      {open && (
        <div className="absolute z-10 mt-1 rounded-xl bg-white shadow-lg">
          <DayPicker
            mode="single"
            locale={enGB}
            selected={selected}
            onSelect={onSelect}
            disabled={{ before: new Date() }}
            classNames={{
              root: "p-3 w-72",
              month_caption:
                "flex justify-center items-center mb-2 font-semibold text-text-dark",
              nav: "flex items-center justify-between mb-2",
              button_previous: "cursor-pointer p-1 hover:text-primary-light",
              button_next: "cursor-pointer p-1 hover:text-primary-light",
              weekdays: "grid grid-cols-7 mb-1",
              weekday:
                "text-center text-xs text-text-secondary font-medium py-1",
              weeks: "flex flex-col gap-1",
              week: "grid grid-cols-7",
              day: "flex items-center justify-center",
              day_button:
                "w-9 h-9 rounded-full text-sm hover:bg-bg-light cursor-pointer transition-colors",
              selected: "bg-primary-light! text-white! rounded-full",
              today: "font-bold text-primary-light",
              outside: "opacity-30",
              disabled: "opacity-30 cursor-not-allowed",
            }}
          />
        </div>
      )}
    </div>
  );
};
export default DatePicker;
