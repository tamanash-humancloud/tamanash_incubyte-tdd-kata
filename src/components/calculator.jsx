import { useState } from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState('')
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('')
    const [result, setResult] = useState('')
    const [operator, setOperator] = useState('')

    const handleInput = (value) => {
        if(operator){
            setDisplay(secondNumber + value)
            setSecondNumber(prev => prev+value)
        } else {
            setDisplay(firstNumber + value)
            setFirstNumber(prev => prev+value)
        }
    }    

    const handleOperator = (value) => {
        setOperator(value)
        setDisplay('0')
    }

  return (
    <div className='calculator'>
        <div className='display'>
            {/* Display the complete equation the user wants to run */}
            <div>
                {firstNumber} {operator} {secondNumber}
            </div>
            {/* Displays user inputs and results */}
            <div>
                {display}
            </div>
        </div>
        <div className='button-wrapper'>
            {/* Number Inputs */}
            <div className='input-wrapper'>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button className='last-input' onClick={() => handleInput('0')}>0</button>
            </div>
            <div className='action-wrapper'>
                {/* Operator Buttons */}
                <div className='operator'>
                    <button onClick={() => handleOperator('+')}>+</button>
                    <button onClick={() => handleOperator('-')}>-</button>
                    <button onClick={() => handleOperator('*')}>*</button>
                    <button onClick={() => handleOperator('/')}>/</button>
                </div>
                {/* Utility Buttons */}
                <div className='utility'>
                    <button onClick={() => handleOperator('c')}>C</button>
                    <button onClick={() => handleOperator('=')}>=</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
