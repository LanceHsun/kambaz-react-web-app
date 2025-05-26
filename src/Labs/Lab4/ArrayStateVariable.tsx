import { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    
    const addElement = () => {
        setArray([
            ...array, 
            Math.floor(Math.random() * 100)
        ]);
    };
    
    const deleteElement = (index: number) => {
        setArray(array.filter((_, i) => i !== index));
    };
    
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button 
                className="btn btn-success mb-2" 
                onClick={addElement}
            >
                Add Element
            </button>
            <div>
                {array.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded d-flex justify-content-between align-items-center mb-1"
                        style={{
                            minHeight: "55px",
                            width: "175px",
                            padding: "10px 20px",
                        }}
                    >
                        <span>{item}</span>
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => deleteElement(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}