import * as React from "react";

import '../styles/CurrentDate.scss'

export default function CurrentDate() {
  return (
    <div className="currentDate">
      <div className="presentDate">
        <div className="date">
          <span>{new Date().toLocaleString("en-US", { day: "2-digit" })}</span>
        </div>
        <div className="month">
          <p>{new Date().toLocaleString("en-US", { month: "short" })}</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
      <div className="day">
        <p>{new Date().toLocaleString("en-US", { weekday: "long" })}</p>
      </div>
    </div>
  );
}
