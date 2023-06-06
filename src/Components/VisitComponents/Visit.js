import React from "react";
import VisitCalendar from "./VisitCalendar";
import VisitEvents from "./VisitEvents";
import "react-calendar/dist/Calendar.css";
import "./visit.css";

function Visit(props) {
  return (
    <>
      <div className="w-full mt-20">
        <div className="text-center flex flex-col gap-10">
          <h2 className="text-3xl font-bold">Amoria Tea Events!</h2>
          <p className="text-xl">
            Come by, say hello, and try our delicious homemade teas!
          </p>
        </div>
        <VisitEvents />
        <VisitCalendar />
      </div>
    </>
  );
}

export default Visit;
