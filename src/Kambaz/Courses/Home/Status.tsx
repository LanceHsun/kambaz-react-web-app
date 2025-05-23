import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { TiChartBar } from "react-icons/ti";
import { PiHouseLineFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa6";
import { VscMegaphone } from "react-icons/vsc";

export default function CourseStatus() {
  const buttons = [{ label: "Import Existing Content", icon: BiImport },
  { label: "Import from Commons", icon: LiaFileImportSolid },
  { label: "Choose Home Page", icon: PiHouseLineFill },
  { label: "View Course Stream", icon: TiChartBar },
  { label: "New Announcement", icon: VscMegaphone },
  { label: "New Analytics", icon: TiChartBar },
  { label: "View Course Notifications", icon: FaBell }
  ];
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
      </div>
      <br />
      {buttons.map((button) => (
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start" key={button.label}>
          <button.icon className="me-2 fs-5" />{button.label}
        </Button>
      ))}
    </div>);
}