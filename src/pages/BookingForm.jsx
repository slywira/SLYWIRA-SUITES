
import { useState } from "react";

function BookingForm() {
  const [hotel, setHotel] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleBooking = (e) => {
    e.preventDefault();

    if (!hotel || !arrival || !departure) {
      alert("Please complete all booking details.");
      return;
    }

    if (departure <= arrival) {
      alert("Departure must be after arrival.");
      return;
    }

    alert(
      `Hotel: ${hotel}\nArrival: ${arrival}\nDeparture: ${departure}\nAdults: ${adults}\nChildren: ${children}`
    );
  };

  return (
    <form
      onSubmit={handleBooking}
      className="w-full bg-[#b5122b] text-white p-5
      grid grid-cols-1 md:grid-cols-6 gap-4 items-center"
    >
    

      {/* Arrival Date */}
      <div className="md:col-span-1">
        <label className="block font-bold mb-2">
          Arriving on
        </label>

        <input
          type="date"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          className="w-full bg-transparent border-b border-white
          p-2 outline-none"
        />
      </div>

      {/* Departure Date */}
      <div className="md:col-span-1">
        <label className="block font-bold mb-2">
          Departure
        </label>

        <input
          type="date"
          min={arrival || undefined}
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="w-full bg-transparent border-b border-white
          p-2 outline-none"
        />
      </div>

      {/* Adults */}
      <div>
        <label className="block font-bold mb-2">
          Adults
        </label>

        <select
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          className="w-full bg-transparent border-b border-white
          p-2 outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <option key={number} value={number} className="text-black">
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Children */}
      <div>
        <label className="block font-bold mb-2">
          Children
        </label>

        <select
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          className="w-full bg-transparent border-b border-white
          p-2 outline-none"
        >
          {[0, 1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number} className="text-black">
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Book Now */}
      <div>
        <button
          type="submit"
          className="w-full bg-white text-black py-3 px-4
          hover:bg-gray-200 transition font-semibold"
        >
          BOOK NOW
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
