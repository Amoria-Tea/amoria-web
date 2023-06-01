import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './visit.css'
//scroll into view then fade in 

function Visit(props) {

    const [date, setDate] = useState(new Date());
    

    return (
     <>
     {/* <div>
<iframe src="https://embed.styledcalendar.com/#nA5fTtBlRGyAHYruKtIA" height="1000px" width="100%"></iframe>
    </div> */}
    <div>
    <div className='calendar-container mb-12 mt-12'>
        <Calendar onChange={setDate} value={date}
        />
      </div>
    </div>
    </>
  );
}

export default Visit;