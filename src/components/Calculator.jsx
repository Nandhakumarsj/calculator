import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePercentage } from "react-icons/ai";
import { BsBackspace, BsDot, BsPlus, BsPlusSlashMinus } from "react-icons/bs";
import { TbAsterisk, TbDivide } from "react-icons/tb";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const Append = (e) => {
    e.preventDefault();
    value.length + 1 < 17 && setValue(value + e.currentTarget.innerText);
  };
  const AddFunc = (operation) => {
    const operations = "%+*/.-";
    if (!operations.includes(value.slice(-1)))
      value.length + 1 < 17 && setValue(value + operation);
  };
  const Reset = (e) => {
    e.preventDefault();
    setValue("");
  };
  const Back = () => {
    setValue(value.slice(0, -1));
  };
  const Evaluator = () => {
    const operations = "%+*/-";
    try {
      if (!operations.includes(value.slice(-1))) {
        // eslint-disable-next-line no-eval
        !isNaN(eval(value)) && setResult(Number(Math.fround(eval(value)).toFixed(4)));
      } else setResult("e");
    } catch (e) {
      console.log(e);
    }
  };
  const PlusMinusHandler = () =>{
    // eslint-disable-next-line no-eval
    setResult(eval(result*-1));
  }
  useEffect(() => {
    if (result !== "e" && result !== 0) setValue("" + result);
  }, [result]);

  return (
    <div className="container">
      <div className="lead fs-1 mt-4">Calculator</div>
      <div className="display-6 text-end text-bg-light">{value || 0}</div>
      <div className="row text-dark text-center p-2 mb-2" style={{'border':'2px solid grey', 'borderRadius':'8px'}}>
        <div className="col-3 btn btn-light " onClick={Reset}>
          C
        </div>
        <div className="col-3 btn btn-light " onClick={(e) => AddFunc("%")}>
          <AiOutlinePercentage size="1rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={(e) => AddFunc("/")}>
          <TbDivide size="1rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={Back}>
          <BsBackspace size="1rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          7
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          8
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          9
        </div>
        <div className="col-3 btn btn-light " onClick={(e) => AddFunc("*")}>
          <TbAsterisk size="1rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          4
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          5
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          6
        </div>
        <div className="col-3 btn btn-light " onClick={(e) => AddFunc("-")}>
          <AiOutlineMinus size="1rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          1
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          2
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          3
        </div>
        <div className="col-3 btn btn-light " onClick={(e) => AddFunc("+")}>
          <BsPlus size="1.5rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={PlusMinusHandler}>
          <BsPlusSlashMinus size="1.5rem" />
        </div>
        <div className="col-3 btn btn-light " onClick={Append}>
          0
        </div>
        <div className="col-3 btn btn-light " onClick={(e) => AddFunc(".")}>
          <BsDot size="1rem" />
        </div>
        <div className="col-3 btn btn-light bg-warning" onClick={Evaluator}>
          =
        </div>
      </div>
      {/* {
      (result === 'e' &&
        <div className="alert alert-danger text-end pe-4">Check Expression</div>)
        ||
        <div className="alert text-bg-info shadow-lg text-end pe-4">{result}</div>
        } */}
    </div>
  );
};
export default Calculator;
