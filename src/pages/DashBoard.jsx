import DashBoardHead from "../components/DashboardHead"
import RecentButtons from "../components/DashBoardRecentExpenseButton"
import RecentExpense from "../components/DashBoardRecentExpenses"
import DashBoardStatistics from "../components/DashBoardStatistics"
import "../css/DashBoard.css"
function DashBoard(){
    return<>
    <DashBoardHead/>
    <DashBoardStatistics/>
    <RecentExpense/>
    <RecentButtons/>
    </>

}
export default DashBoard