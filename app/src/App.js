import './App.css';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';


function App() {
  return (
    <div>
      <div id='calculator'>
        <div id='display'>
        display
        </div>
        <div id='calculator-buttons'>
          <div id='row-0'>
            <CalculatorButton id='AC' classname='AC' character='AC'/>
            <CalculatorButton id='DEL' classname='DEL' character='DEL'/>
          </div>
          <div id='row-1'>
            <CalculatorButton id='1' classname='1' character='1'/>
            <CalculatorButton id='2' classname='2' character='2'/>
            <CalculatorButton id='3' classname='3' character='3'/>
          </div>
          <div id='row-2'>
            <CalculatorButton id='4' classname='4' character='4'/>
            <CalculatorButton id='5' classname='5' character='5'/>
            <CalculatorButton id='6' classname='6' character='6'/>
          </div>
          <div id='row-3'>
            <CalculatorButton id='7' classname='7' character='7'/>
            <CalculatorButton id='8' classname='8' character='8'/>
            <CalculatorButton id='9' classname='9' character='9'/>
          </div>
          <div id='row-4'>
            <CalculatorButton id='.' classname='.' character='.'/>
            <CalculatorButton id='0' classname='0' character='0'/>
            <CalculatorButton id='/' classname='/' character='/'/>
          </div>
          <div id='column'>
            <CalculatorButton id='+' classname='+' character='+'/>
            <CalculatorButton id='-' classname='-' character='-'/>
            <CalculatorButton id='*' classname='*' character='*'/>
            <CalculatorButton id='=' classname='=' character='='/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
