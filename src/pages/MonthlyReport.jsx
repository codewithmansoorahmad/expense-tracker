import { useState } from "react";
import MonthlyCalendar from "../components/MonthlyCalendar";
import MonthlyYearCalendar from "../components/MonthlyYearCalendar";
import "../css/MonthlyReport.css";
import { monthsCode } from "../services/monthlyReport";
import MonthlyStatistics from "../components/MonthlyStatistics";
import { useSelector } from "react-redux";
import CategoryChart from "../components/CategoryChart";
import MonhtlyExpense from "../components/MonthlyExpense";
// import MonthTodayExpense from "../components/MonthTodayExpenses"
function MonthlyReport() {
  const expenses = useSelector((state) => state.expenses.expensesItems);
  const todayMonth = new Date().toLocaleDateString("en-us", { month: "long" });
  const todayYear = Number(
    new Date().toLocaleDateString("en-us", { year: "numeric" }),
  );
  const [selectedMonth, setSelectedMonth] = useState(todayMonth);
  const [selectedYear, setSelectedYear] = useState(todayYear);
  const todayDate = new Date().toLocaleDateString("en-us", { day: "2-digit" });
  const yearMonths = monthsCode;
  const [selectedDay, setSelectedDay] = useState(todayDate);
  const monthIndex = monthsCode.findIndex((item) => selectedMonth === item) + 1;
  const month = String(monthIndex).padStart(2, "0");

  let monthData =
    expenses.length > 0
      ? expenses.filter((item) => {
        const [year,expenseMonth]=item.date.split("-")
          return year==selectedYear &&expenseMonth==month
        })
      : [];
  let array = [selectedYear, month, selectedDay];
  let selectedDate = array.join("-");
  console.log(selectedDate);
  console.log(selectedDay);
  console.log(selectedYear);
  console.log(selectedMonth);
  console.log(monthData);

  return (
    <div>
      <MonthlyYearCalendar
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        yearMonths={yearMonths}
      />
      <MonthlyCalendar
        selectedMonth={selectedMonth}
        monthIndex={monthIndex}
        monthsCode={monthsCode}
        selectedYear={selectedYear}
        selectedDay={selectedDay}
        monthData={monthData}
        setSelectedDay={setSelectedDay}
        selectedDate={selectedDate}
      />

      <MonthlyStatistics
        monthIndex={monthIndex}
        selectedDay={selectedDay}
        selectedYear={selectedYear}
        expenses={expenses}
        monthData={monthData}
        month={month}
      />
      {monthData.length >0  && <CategoryChart monthData={monthData} />}
      {monthData.length >0 && (
        <MonhtlyExpense monthData={monthData} selectedYear={selectedYear} />
      )}
    </div>
  );
}
export default MonthlyReport;
