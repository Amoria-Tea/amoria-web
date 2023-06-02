import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Visit.module.css";
//scroll into view then fade in

function Visit(props) {
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

  return (
    <>
      {/* <div>
<iframe src="https://embed.styledcalendar.com/#nA5fTtBlRGyAHYruKtIA" height="1000px" width="100%"></iframe>
    </div> */}
      <div className="w-full">
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
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </>
  );
}

export default Visit;
