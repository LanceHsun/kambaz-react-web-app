import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentsControlButtons() {
    return (
        <div className="float-end">
            <label className="wd-assignment-percentage">40% of Total</label>
            <BsPlus className="fs-4"/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}