import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { Form, Button } from "react-bootstrap";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();
  
  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum}
      </h2>
      <Form.Control 
        type="number" 
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control mb-2"
      />
      <Form.Control 
        type="number" 
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control mb-2"
      />
      <Button 
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
        className="btn btn-primary w-100"
      >
        Add Redux
      </Button>
      <hr/>
    </div>
  );
}