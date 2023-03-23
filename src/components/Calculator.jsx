import { useState } from "react";

const Calculator = () =>{
    const [input, setInput] = useState('');
    const InputHandler = (e) =>{
        e.preventDefault();
        setInput(e.currentTarget.value);
    };
    return (
        <div className="row">
            <input type='number' className="form-control" value={input} onChange={InputHandler} />
            <div className="row">
                <div className="col">
                    <div className="col">
                        +
                    </div>
                    <div className="col">
                        -
                    </div>
                </div>
                <div className="col">
                    <div className="col">
                        =
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;