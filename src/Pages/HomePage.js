import React, { useState } from "react";

import "../Styles/Pages/HomePage.scss";

function HomePage() {
  const [amountPerHour, setAmountPerHour] = useState(Number);
  const [hoursPerDay, setHoursPerDay] = useState(Number);
  const [amountOfWorkDays, setAmountOfWorkDays] = useState(Number);
  const [customPercentage, setCustomPercentage] = useState(Number);

  //   const amountPerHour = document.getElementById("amountInput").value;

  const amountPerDay = amountPerHour * hoursPerDay;
  const weekPay = amountOfWorkDays * amountPerDay;
  const monthPay = weekPay * 4;

  const handlePerHourChange = (e) => {
    setAmountPerHour(e.target.value);
  };
  const handleHoursPerDayChange = (e) => {
    setHoursPerDay(e.target.value);
  };
  const handleAmountOfDaysChange = (e) => {
    setAmountOfWorkDays(e.target.value);
  };

  const handleCustomPercentage = (e) => {
    setCustomPercentage(e.target.value);
  };
  const RenderPercentageAmount = (percentage) => {
    const _amountPerHour = (percentage / 100) * amountPerHour;
    const _amountPerDay = (percentage / 100) * amountPerDay;
    const _weekPay = (percentage / 100) * weekPay;
    const _monthPay = (percentage / 100) * monthPay;
    const _2MonthsPay = (percentage / 100) * (monthPay * 2);
    const _4MonthsPay = (percentage / 100) * (monthPay * 4);
    const _6MonthsPay = (percentage / 100) * (monthPay * 6);
    const _8MonthsPay = (percentage / 100) * (monthPay * 8);
    const _10MonthsPay = (percentage / 100) * (monthPay * 10);
    const _12MonthsPay = (percentage / 100) * (monthPay * 12);
    const _yearPay = (percentage / 100) * (weekPay * 52);

    return (
      <tr>
        <td>{percentage}%</td>
        <td>{Number(_amountPerHour.toFixed(2))}</td>
        <td>{Number(_amountPerDay.toFixed(2))}</td>
        <td>{Number(_weekPay.toFixed(2))}</td>
        <td>{Number(_monthPay.toFixed(2))}</td>
        <td>{Number(_2MonthsPay.toFixed(2))}</td>
        <td>{Number(_4MonthsPay.toFixed(2))}</td>
        <td>{Number(_6MonthsPay.toFixed(2))}</td>
        <td>{Number(_8MonthsPay.toFixed(2))}</td>
        <td>{Number(_10MonthsPay.toFixed(2))}</td>
        <td>{Number(_12MonthsPay.toFixed(2))}</td>
        <td>{Number(_yearPay.toFixed(2))}</td>
      </tr>
    );
  };

  const RenderYearAmount = (percentage) => {
    const _amountPerHour = (percentage / 100) * amountPerHour;
    const _amountPerDay = (percentage / 100) * amountPerDay;
    const _weekPay = (percentage / 100) * weekPay;
    const _monthPay = (percentage / 100) * monthPay;
    const _2MonthsPay = (percentage / 100) * (monthPay * 2);
    const _4MonthsPay = (percentage / 100) * (monthPay * 4);
    const _6MonthsPay = (percentage / 100) * (monthPay * 6);
    const _8MonthsPay = (percentage / 100) * (monthPay * 8);
    const _10MonthsPay = (percentage / 100) * (monthPay * 10);
    const _12MonthsPay = (percentage / 100) * (monthPay * 12);
    const _yearPay = (percentage / 100) * (weekPay * 52);

    return (
      <tr>
        <td>{Number(_amountPerHour.toFixed(2))}</td>
        <td>{Number(_amountPerDay.toFixed(2))}</td>
        <td>{Number(_weekPay.toFixed(2))}</td>
        <td>{Number(_monthPay.toFixed(2))}</td>
        <td>{Number(_2MonthsPay.toFixed(2))}</td>
        <td>{Number(_4MonthsPay.toFixed(2))}</td>
        <td>{Number(_6MonthsPay.toFixed(2))}</td>
        <td>{Number(_8MonthsPay.toFixed(2))}</td>
        <td>{Number(_10MonthsPay.toFixed(2))}</td>
        <td>{Number(_12MonthsPay.toFixed(2))}</td>
        <td>{Number(_yearPay.toFixed(2))}</td>
      </tr>
    );
  };

  return (
    <div className="homePage">
      <h2>Money x Time Calculator</h2>

      <div className="topSection">
        <div>
          Amount per hour{" "}
          <input
            id="amountInput"
            type="number"
            placeholder="Amount per hour"
            onChange={handlePerHourChange}
          />
        </div>
        <div>
          Hours per day{" "}
          <input
            id="amountInput"
            type="number"
            placeholder="Hours per day"
            onChange={handleHoursPerDayChange}
          />
        </div>
        <div>
          Work days per week{" "}
          <input
            id="amountInput"
            type="number"
            placeholder="Work days per week"
            onChange={handleAmountOfDaysChange}
          />
        </div>

        <div>
          Custom Percentage
          <input
            id="amountInput"
            type="number"
            placeholder="Add Custom Percentage"
            onChange={handleCustomPercentage}
          />
        </div>
      </div>

      <table>
        <tr>
          <th>Hour</th>
          <th>Day</th>
          <th>Week</th>
          <th>Month</th>
          <th>2 Months</th>
          <th>4 Months</th>
          <th>6 Months</th>
          <th>8 Months</th>
          <th>10 Months</th>
          <th>12 Months</th>
          <th>Year</th>
        </tr>
        {RenderYearAmount(100)}
      </table>

      <table>
        <caption>Custom Percentage</caption>

        <tr>
          <th>Percentage</th>
          <th>Hour</th>
          <th>Day</th>
          <th>Week</th>
          <th>Month</th>
          <th>2 Months</th>
          <th>4 Months</th>
          <th>6 Months</th>
          <th>8 Months</th>
          <th>10 Months</th>
          <th>12 Months</th>
          <th>Year</th>
        </tr>
        {RenderPercentageAmount(customPercentage)}
      </table>

      <table className="percentageTable">
        <caption>Percentages</caption>
        <tr>
          <th>Percentage</th>
          <th>Hour</th>
          <th>Day</th>
          <th>Week</th>
          <th>Month</th>
          <th>2 Months</th>
          <th>4 Months</th>
          <th>6 Months</th>
          <th>8 Months</th>
          <th>10 Months</th>
          <th>12 Months</th>
          <th>Year</th>
        </tr>
        {RenderPercentageAmount(100)}
        {RenderPercentageAmount(50)}
        {RenderPercentageAmount(40)}
        {RenderPercentageAmount(30)}
        {RenderPercentageAmount(20)}
        {RenderPercentageAmount(15)}
        {RenderPercentageAmount(10)}
        {RenderPercentageAmount(5)}
        {RenderPercentageAmount(1)}
      </table>

      <div className="explain">
        <h4>Why I put 12 months and Year instead of just Year</h4>
        <p>
          The reason I didnt just put year is becuause it multiplies months by
          the amount of weeks in a month (4) and 4x12=48, but there is 52 weeks
          in a year, so thats why I added year to it
        </p>
      </div>
    </div>
  );
}

export default HomePage;
