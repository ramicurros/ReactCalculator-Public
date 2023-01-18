import './App.css';
import OperationButton from './components/OperationButtons';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';


function App() {
  return (
    <div>
      <div id='calculator'>
        <div>
        display
        </div>
        <div id='calculator-buttons'>
          <div id='row-0'>
            <CalculatorButton id='clear' classname='AC' character='AC'/>
            <CalculatorButton id='DEL' classname='DEL' character='DEL'/>
          </div>
          <div id='row-1'>
            <CalculatorButton id='one' classname='1' character='1 '/>
            <CalculatorButton id='two' classname='2' character='2'/>
            <CalculatorButton id='three' classname='3' character='3'/>
          </div>
          <div id='row-2'>
            <CalculatorButton id='four' classname='4' character='4'/>
            <CalculatorButton id='five' classname='5' character='5'/>
            <CalculatorButton id='six' classname='6' character='6'/>
          </div>
          <div id='row-3'>
            <CalculatorButton id='seven' classname='7' character='7'/>
            <CalculatorButton id='eight' classname='8' character='8'/>
            <CalculatorButton id='nine' classname='9' character='9'/>
          </div>
          <div id='row-4'>
            <CalculatorButton id='decimal' classname='.' character='.'/>
            <CalculatorButton id='zero' classname='0' character='0'/>
            <OperationButton id='divide' classname='/' character='/'/>
          </div>
          <div id='column'>
            <OperationButton id='add' classname='+' character='+'/>
            <OperationButton id='substract' classname='-' character='-'/>
            <OperationButton id='multiply' classname='*' character='*'/>
            <OperationButton id='equals' classname='=' character='='/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
