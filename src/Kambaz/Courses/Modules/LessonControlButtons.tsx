import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <span className="position-relative d-inline-block me-2">
        <span className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
              style={{ width: '20px', height: '20px' }}>
          <FaCheck className="text-white" style={{ fontSize: '12px' }} />
        </span>
      </span>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}