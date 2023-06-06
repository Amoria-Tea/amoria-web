import React from "react";
import VisitCalendar from "./VisitCalendar";
import VisitEvents from "./VisitEvents";
import "react-calendar/dist/Calendar.css";
import "./visit.css";

function Visit(props) {
  return (
    <>
      {/* <div>
<iframe src="https://embed.styledcalendar.com/#nA5fTtBlRGyAHYruKtIA" height="1000px" width="100%"></iframe>
    </div> */}
      <div className="w-full">
        <div className="calendar-container mb-12 mt-8 relative m-auto w-[90%]">
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
        <VisitEvents />
        <VisitCalendar />
      </div>
    </>
  );
}

export default Visit;
