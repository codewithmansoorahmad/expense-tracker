import MonthTodayExpense from "./MonthTodayExpenses";

function MonthlyCalendar({
  monthIndex,
  selectedYear,
  selectedDate,
  setSelectedDay,
  monthData,
}) {
  const firstDay = new Date(selectedYear, monthIndex, 1).getDay();
  const monthDays = new Date(selectedYear, monthIndex + 1, 0).getDate();

  let days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= monthDays; i++) {
    days.push(i);
  }

  return (
    <div className="days">
      <div className="days-day">
        <p>sun</p>
        <p>mon</p>
        <p>tue</p>
        <p>wen</p>
        <p>thu</p>
        <p>fri</p>
        <p>sat</p>
      </div>
      <div className="days-grid">
        {days.map((item, index) =>
          item === null ? (
            <div key={index}></div>
          ) : (
            <button key={index} onClick={() => setSelectedDay(item)}>
              {item}
            </button>
          ),
        )}
      </div>
      {monthData.length > 0 && (
        <MonthTodayExpense selectedDate={selectedDate} monthData={monthData} />
      )}
    </div>
  );
}
export default MonthlyCalendar;
