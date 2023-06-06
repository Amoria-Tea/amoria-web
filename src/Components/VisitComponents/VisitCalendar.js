import { useState } from "react";
import Calendar from "react-calendar";
import events from "../../data/events";
import VisitCalendarTile from "./VisitCalendarTile";
import "./VisitCalendar.css";

const VisitCalendar = () => {
  const [date, setDate] = useState(new Date());
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const handlePrevMonth = () => {
    setDate((prevDate) => {
      const prevMonth = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        1
      );
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      const nextMonth = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        1
      );
      return nextMonth;
    });
  };

  const tileContent = ({ date, view }) => {
    const formattedDate = date.toDateString();
    const event = events.find(
      (event) => event.date.toDateString() === formattedDate
    );

    if (view === "month" && event) {
      return <VisitCalendarTile event={event} />;
    }

    return null;
  };

  return (
    <div className="calendar-container mb-12 mt-12 relative m-auto w-[90%]">
      <div className="absolute flex justify-between items-center w-full top-10 md:px-10 px-8">
        <button
          onClick={handlePrevMonth}
          className="bg-white rounded-full p-4 h-10 w-10 relative flex justify-center items-center"
        >
          <i className="fa-solid fa-chevron-left absolute" />
        </button>
        <div>
          <span className="font-bold md:text-2xl text-xl">
            {months[date.getMonth()]}
          </span>
          <span className="md:text-2xl text-xl"> {date.getFullYear()}</span>
        </div>
        <button
          onClick={handleNextMonth}
          className="bg-white rounded-full p-4 h-10 w-10 relative flex justify-center items-center"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        tileClassName="customTile"
      />
    </div>
  );
};

export default VisitCalendar;
