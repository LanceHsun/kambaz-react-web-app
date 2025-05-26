import { useState } from "react";
import { Form } from "react-bootstrap";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  
  const dateObjectToHtmlDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  };
  
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      
      <Form.Control
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className="form-control"
      />
      
      <hr/>
    </div>
  );
}