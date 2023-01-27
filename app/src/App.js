import {useState} from 'react';
import './App.css';
import OperationButton from './components/OperationButtons';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';


function App() {

    const [input, setInput] = useState('');
    const [number2, setNumber2] = useState(0);
    const [inDisplay, setInDisplay] = useState('');
    const [result, setResult] = useState('0');

  	function operationFunc(x, y, z){
      setResult(eval(`${x} ${z} ${y}`));
      setInDisplay(`${x} ${z}`);
      setInput('');
  }

    function numberFunc(x){
      setInput(`${input}` + `${x}`);  
    }

  return (
    <div id='App'>
      <div id='calculator'>
        <div id='display' className='display'>
          <CalculatorDisplay currentInput={input} display={inDisplay} inputClass='input' displayClass='numberDisplay'/>
        </div>
        <div id='calculator-buttons'>
          <div id='row-0'>
            <CalculatorButton id='clear' classname='AC' character='AC'/>
            <CalculatorButton id='DEL' classname='DEL' character='DEL'/>
          </div>
          <div id='row-1'>
            <CalculatorButton id='one' classname='1' character='1' function={numberFunc}/>
            <CalculatorButton id='two' classname='2' character='2' function={numberFunc}/>
            <CalculatorButton id='three' classname='3' character='3' function={numberFunc}/>
          </div>
          <div id='row-2'>
            <CalculatorButton id='four' classname='4' character='4' function={numberFunc}/>
            <CalculatorButton id='five' classname='5' character='5' function={numberFunc}/>
            <CalculatorButton id='six' classname='6' character='6' function={numberFunc}/>
          </div>
          <div id='row-3'>
            <CalculatorButton id='seven' classname='7' character='7' function={numberFunc}/>
            <CalculatorButton id='eight' classname='8' character='8' function={numberFunc}/>
            <CalculatorButton id='nine' classname='9' character='9' function={numberFunc}/>
          </div>
          <div id='row-4'>
            <CalculatorButton id='decimal' classname='.' character='.' function={numberFunc}/>
            <CalculatorButton id='zero' classname='0' character='0' function={numberFunc}/>
            <OperationButton id='divide' classname='/' character='/' function={operationFunc} accumulator={result} input={input}/>
          </div>
          <div id='column'>
            <OperationButton id='add' classname='+' character='+'  function={operationFunc} accumulator={result} input={input}/>
            <OperationButton id='substract' classname='-' character='-'  function={operationFunc} accumulator={result} input={input}/>
            <OperationButton id='multiply' classname='*' character='*'  function={operationFunc} accumulator={result} input={input}/>
            <OperationButton id='equals' classname='=' character='='  function={operationFunc} accumulator={result} input={input}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
