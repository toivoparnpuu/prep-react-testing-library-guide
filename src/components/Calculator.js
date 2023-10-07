import React from 'react'
import { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleNum1Change = (event) => {
        setNum1(event.target.value);
    };

    const handleNum2Change = (event) => {
        setNum2(event.target.value);
    };

    const handleOperatorClick = (event) => {
        setOperator(event.target.value);
    };

    const handleCalculateClick = () => {
        let num1Float = parseFloat(num1);
        let num2Float = parseFloat(num2);
        let resultFloat;

        switch (operator) {
            case '+':
                resultFloat = num1Float + num2Float;
                break;
            case '-':
                resultFloat = num1Float - num2Float;
                break;
            case '*':
                resultFloat = num1Float * num2Float;
                break;
            case '/':
                resultFloat = num1Float / num2Float;
                break;
            default:
                resultFloat = '';
        }

        setResult(resultFloat);
    };

    return (
        <div>
            <h1>Kalkulaator</h1>
            <p>Siin saad liita, lahutada, korrutada ja jagada</p>
            <input type="number" placeholder="Sisesta esimene number" value={num1} onChange={handleNum1Change} />
            <input type="number" placeholder="Sisesta teine number" value={num2} onChange={handleNum2Change} />
            <br />
            <button value="+" onClick={handleOperatorClick}>
                Lisa
            </button>
            <button value="-" onClick={handleOperatorClick}>
                Lahuta
            </button>
            <button value="*" onClick={handleOperatorClick}>
                Korruta
            </button>
            <button value="/" onClick={handleOperatorClick}>
                Jaga
            </button>
            <br />
            <button onClick={handleCalculateClick}>Arvuta</button>
            <br />
            <p>Tulemus: {result}</p>
        </div>
    );
}

export default Calculator;
