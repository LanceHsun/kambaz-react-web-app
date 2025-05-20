import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

export default function ModuleControlButtons() {
  return (
    <div className="ms-auto d-flex align-items-center">
      <span className="position-relative d-inline-block me-2">
        <span className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
              style={{ width: '20px', height: '20px' }}>
          <FaCheck className="text-white" style={{ fontSize: '12px' }} />
        </span>
      </span>
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}