import {useState} from 'react';
import './App.css';
import OperationButton from './components/OperationButtons';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';


function App() {

    const [number, setNumber] = useState('');
    const [inDisplay, setInDisplay] = useState('');
    const [result, setResult] = useState('');s

    function operationFunc(x){
        setResult(number);
        setInDisplay(`${result + x}`);
        setNumber(' ');
    }

    function numberFunc(x){
      setNumber(`${number}` + `${x}`);
    }

  return (
    <div>
      <div id='calculator'>
        <div id='display'>
          <CalculatorDisplay currentInput={number} display={inDisplay}/>
        </div>
        <div id='calculator-buttons'>
          <div id='row-0'>
            <CalculatorButton id='clear' classname='AC' character='AC'/>
            <CalculatorButton id='DEL' classname='DEL' character='DEL'/>
          </div>
          <div id='row-1'>
            <CalculatorButton id='one' classname='1' character='1 ' function={numberFunc}/>
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
            <OperationButton id='divide' classname='/' character='/' function={operationFunc}/>
          </div>
          <div id='column'>
            <OperationButton id='add' classname='+' character='+'  function={operationFunc}/>
            <OperationButton id='substract' classname='-' character='-'  function={operationFunc}/>
            <OperationButton id='multiply' classname='*' character='*'  function={operationFunc}/>
            <OperationButton id='equals' classname='=' character='='  function={operationFunc}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
