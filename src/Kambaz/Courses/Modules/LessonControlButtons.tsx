import { IoEllipsisVertical } from "react-icons/io5";

import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
    return (
        <div className="float-end wd-lesson-icon-container">
            <span className="align-items-center"><GreenCheckmark /></span>
            <IoEllipsisVertical className="fs-4" />
        </div>);
}