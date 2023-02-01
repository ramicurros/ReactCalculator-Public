import { useReducer, useState } from 'react';
import './App.css';
import OperationButton from './components/OperationButtons';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';

export const ACTIONS = { ADD_NUMBER: 'add_number', DELETE_NUMBER: 'delete_number', OPERATION: 'operation', SET_RESULT: 'set_result', CLEAR: 'clear' }

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUMBER:
      if (payload.digit === '0' && state.currentNumber === '0') { return state }
      if (payload.digit === '.' && state.currentNumber.includes('.')) { return state }
      return { ...state, currentNumber: `${currentNumber || ''}${payload.digit}` }
    case ACTIONS.DELETE_NUMBER: return{}
    case ACTIONS.CLEAR: return {}
    case ACTIONS.OPERATION:
      if (state.currentNumber === null && state.prevNumber === null) { return state }
      if (state.prevNumber === null) { return { ...state, operation: payload.operation, prevNumber: state.currentNumber, currentNumber: null } }
      return { ...state, operation: payload.operation, prevNumber: calculate(state), currentNumber: null }
    case ACTIONS.SET_RESULT: return { ...state, result: payload.result }
  }
}

function calculate(x) {
  return eval(`${x.prevNumber}${x.operation}${x.currentNumber}`);
}

function App() {

  const [ {prevNumber, currentNumber, operation} , dispatch] = useReducer(reducer, {})


  return (
    <div id='App'>
      <div id='calculator'>
        <div id='display' className='display'>
          <div className='operationDisplay'>{prevNumber} {operation}</div>
          <div className='inputDisplay'>{currentNumber}</div>
        </div>
        <div id='calculator-buttons'>
          <div id='row-0'>
            <CalculatorButton id='clear' classname='AC' character='AC' function={dispatch}/>
            <CalculatorButton id='DEL' classname='DEL' character='DEL' function={dispatch}/>
          </div>
          <div id='row-1'>
            <CalculatorButton id='one' classname='1' character='1' function={dispatch} />
            <CalculatorButton id='two' classname='2' character='2' function={dispatch} />
            <CalculatorButton id='three' classname='3' character='3' function={dispatch} />
          </div>
          <div id='row-2'>
            <CalculatorButton id='four' classname='4' character='4' function={dispatch} />
            <CalculatorButton id='five' classname='5' character='5' function={dispatch} />
            <CalculatorButton id='six' classname='6' character='6' function={dispatch} />
          </div>
          <div id='row-3'>
            <CalculatorButton id='seven' classname='7' character='7' function={dispatch} />
            <CalculatorButton id='eight' classname='8' character='8' function={dispatch} />
            <CalculatorButton id='nine' classname='9' character='9' function={dispatch} />
          </div>
          <div id='row-4'>
            <CalculatorButton id='decimal' classname='.' character='.' function={dispatch} />
            <CalculatorButton id='zero' classname='0' character='0' function={dispatch} />
            <OperationButton id='divide' classname='/' character='/' function={dispatch} />
          </div>
          <div id='column'>
            <OperationButton id='add' classname='+' character='+' function={dispatch} />
            <OperationButton id='substract' classname='-' character='-' function={dispatch} />
            <OperationButton id='multiply' classname='*' character='*' function={dispatch} />
            <OperationButton id='equals' classname='=' character='=' function={dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
