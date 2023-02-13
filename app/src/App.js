import { useReducer, useState } from 'react';
import './App.css';
import OperationButton from './components/OperationButtons';
import CalculatorButton from './components/CalculatorButton';

export const ACTIONS = { ADD_NUMBER: 'add_number', DELETE_NUMBER: 'delete_number', OPERATION: 'operation', SET_RESULT: 'set_result', CLEAR: 'clear' }

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUMBER:
      if (payload.character === '0' && state.currentNumber === '0') { return state }
      if (payload.character === '.' && state.currentNumber == null) { return {...state, currentNumber: '0.'} }
      if (payload.character === '.' && state.currentNumber.includes('.')) { return state }
      if (`${state.currentNumber}`.length > 22) { return state }
      if (state.currentNumber === 'ERROR') { return { ...state, currentNumber: `${payload.character}` } }
      return { ...state, currentNumber: `${state.currentNumber || ''}${payload.character}` }
    case ACTIONS.DELETE_NUMBER:
      if(state.currentNumber == null){return state}
      if(`${state.currentNumber}`.length === 1){return {...state, currentNumber: null}}
      return {...state, currentNumber: state.currentNumber.slice(0,-1)}
    case ACTIONS.CLEAR: return {}
    case ACTIONS.OPERATION:
      if (state.currentNumber == null && state.prevNumber == null) { return state }
      if (state.prevNumber == null) { return { ...state, operation: payload.operation, prevNumber: state.currentNumber, currentNumber: null, } }
      if (state.currentNumber == null) { return { ...state, operation: payload.operation, } }
      return { ...state, operation: payload.operation, prevNumber: calculate(state), currentNumber: null, }
    case ACTIONS.SET_RESULT:
      if (state.currentNumber == null || state.prevNumber == null || state.operation == null) { return state }
      if (`${state.prevNumber}`.length > 22) { return { ...state, currentNumber: 'ERROR', prevNumber: null, operation: null, } }
      return { ...state, currentNumber: calculate(state), prevNumber: null, operation: null, }
  }
}

function calculate(x) {
  let prev = parseFloat(x.prevNumber);
  let current = parseFloat(x.currentNumber);
  console.log(prev);
  if (isNaN(prev) || isNaN(current)) return '';
  return eval(`${prev}${x.operation}${current}`).toString();
}

function App() {

  const [state, dispatch] = useReducer(reducer, {})


  return (
    <div id='App' className='d-flex justify-content-center App'>
      <div id='calculator' className='d-flex align-items-center flex-column calculator-wrapper'>
        <div id='display' className='d-flex flex-column  display'>
          <div className='d-flex flex-row operationDisplay'>{state.prevNumber} {state.operation}</div>
          <div className='d-flex flex-row inputDisplay'>{state.currentNumber}</div>
        </div>
        <div id='calculator-buttons' className='d-flex flex-row btn-group'>
          <div className='d-flex flex-column btn-group-vertical row-buttons'>
            <div id='row-0' className='btn-group rows'>
              <CalculatorButton id='clear' classname='btn top-buttons  calculator-button' character='AC' dispatch={dispatch} />
              <CalculatorButton id='DEL' classname='btn top-buttons calculator-button' character='DEL' dispatch={dispatch} />
            </div>
            <div id='row-1' className='btn-group rows'>
              <CalculatorButton id='one' classname='btn btn-light calculator-button' character='1' dispatch={dispatch} />
              <CalculatorButton id='two' classname='btn btn-light calculator-button' character='2' dispatch={dispatch} />
              <CalculatorButton id='three' classname='btn btn-light calculator-button' character='3' dispatch={dispatch} />
            </div>
            <div id='row-2' className='btn-group rows'>
              <CalculatorButton id='four' classname='btn btn-light calculator-button' character='4' dispatch={dispatch} />
              <CalculatorButton id='five' classname='btn btn-light calculator-button' character='5' dispatch={dispatch} />
              <CalculatorButton id='six' classname='btn btn-light calculator-button' character='6' dispatch={dispatch} />
            </div>
            <div id='row-3' className='btn-group rows'>
              <CalculatorButton id='seven' classname='btn btn-light calculator-button' character='7' dispatch={dispatch} />
              <CalculatorButton id='eight' classname='btn btn-light calculator-button' character='8' dispatch={dispatch} />
              <CalculatorButton id='nine' classname='btn btn-light calculator-button' character='9' dispatch={dispatch} />
            </div>
            <div id='row-4' className='btn-group rows'>
              <CalculatorButton id='decimal' classname='btn  btn-light calculator-button' character='.' dispatch={dispatch} />
              <CalculatorButton id='zero' classname='btn btn-light calculator-button' character='0' dispatch={dispatch} />
              <OperationButton id='divide' classname='btn  btn-light calculator-button' operation='/' dispatch={dispatch} />
            </div>
          </div>
          <div id='operation-buttons' className='d-flex flex-column btn-group-vertical column-buttons'>
            <OperationButton id='add' classname='btn  operation-button calculator-button' operation='+' dispatch={dispatch} />
            <OperationButton id='substract' classname='btn  operation-button calculator-button' operation='-' dispatch={dispatch} />
            <OperationButton id='multiply' classname='btn  operation-button calculator-button' operation='*' dispatch={dispatch} />
            <OperationButton id='equals' classname='btn  calculator-button' operation='=' dispatch={dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
