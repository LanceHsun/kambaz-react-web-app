import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function KambazNavigation() {
  const [activeButton, setActiveButton] = useState("Dashboard");
  
  return (
    <div id="wd-kambaz-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="90px" height="90px" /></a>
      <Link to="/Kambaz/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 ${activeButton === "Account" ? "bg-white text-danger" : "bg-black text-white"}`}
        onClick={() => setActiveButton("Account")}>
        <FaRegCircleUser className={`fs-1 ${activeButton === "Account" ? "text-danger" : "text-white"}`} />
        Account </Link>
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${activeButton === "Dashboard" ? "bg-white text-danger" : "bg-black text-white"}`}
        onClick={() => setActiveButton("Dashboard")}>
        <AiOutlineDashboard className={`fs-1 ${activeButton === "Dashboard" ? "text-danger" : "text-white"}`} />
        Dashboard </Link>
      <Link to="/Kambaz/Dashboard" id="wd-course-link"
        className={`list-group-item text-center border-0 ${activeButton === "Courses" ? "bg-white" : "bg-black"} text-danger`}
        onClick={() => setActiveButton("Courses")}>
        <LiaBookSolid className="fs-1 text-danger" />
        Courses </Link>
      <Link to="/Kambaz/Calendar" id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${activeButton === "Calendar" ? "bg-white" : "bg-black"} text-danger`}
        onClick={() => setActiveButton("Calendar")}>
        <IoCalendarOutline className="fs-1 text-danger" />
        Calendar</Link>
      <Link to="/Kambaz/Inbox" id="wd-inbox-link" 
        className={`list-group-item text-center border-0 ${activeButton === "Inbox" ? "bg-white" : "bg-black"} text-danger`}
        onClick={() => setActiveButton("Inbox")}>
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox</Link>
      <Link to="/Labs" id="wd-labs-link" 
        className={`list-group-item text-center border-0 ${activeButton === "Labs" ? "bg-white" : "bg-black"} text-danger flex-column align-items-center`}
        onClick={() => setActiveButton("Labs")}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs</Link>
    </div>
  )
}