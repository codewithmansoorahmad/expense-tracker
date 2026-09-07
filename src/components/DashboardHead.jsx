function DashBoardHead(){
    const todayDate=new Date().toLocaleDateString("en-us",{
        day:"numeric",
        month:"long",
        year:"numeric"
    })
    console.log(todayDate)
    return <div className="dashboard-head">
        <h3>Welcome / Expense Overview</h3>
        <p>{todayDate}</p>


    </div>
}
export default DashBoardHead