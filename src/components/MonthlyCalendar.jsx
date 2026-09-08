import MonthTodayExpense from "./MonthTodayExpenses";

function MonthlyCalendar({
    monthIndex,
    selectedYear,
    selectedDate,
    selectedDay,
    setSelectedDay,
    monthData,
}) {
    const firstDay = new Date(selectedYear, monthIndex, 1).getDay();
    const monthDays = new Date(
        selectedYear,
        monthIndex + 1,
        0
    ).getDate();
    const today = new Date();
    const todayDate=today.toLocaleDateString("en-us",{
        day:"numeric",
    })
 
    


    let days = [];

    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }

    for (let i = 1; i <= monthDays; i++) {
        days.push(i);
    }

    function handleClick(item) {
        const date = String(item).padStart(2, "0");
        setSelectedDay(date);
    }

    return (
        <>
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
                            <button
                                key={index}
                                className={
                                    todayDate==item &&Number(todayDate)===Number(selectedDay) ?"btn-today":item==Number(selectedDay)?"btn-date":"btn"
                                }
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </button>
                        )
                    )}
                </div>
            </div>

            <MonthTodayExpense
                selectedDate={selectedDate}
                monthData={monthData}
            />
        </>
    );
}

export default MonthlyCalendar;