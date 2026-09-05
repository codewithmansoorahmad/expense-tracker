import { useState } from "react";
import { months } from "../services/monthlyReport";

function MonthlyCalendar(){
    let month=9;
    let year=2026
    const yearMonths=months
    
    const firstDay=new Date(year,month,1).getDay()
    const monthDays=new Date(year,month +1,0).getDate()
    const [selectedDay,setSelectedDay]=useState("")

    let days=[]
    for(let i=0;i<firstDay;i++){
        days.push(null)
    }
    for(let i=1;i<=monthDays;i++){
        days.push(i)
    }

    

    return <div className="days">
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


       {
        days.map((item,index)=> 

            item===null?<div key={index}></div>:<button key={index} onClick={()=>setSelectedDay(item)}>{item}</button>
            
        
    )
    }
       </div>

    </div>
}
export default MonthlyCalendar