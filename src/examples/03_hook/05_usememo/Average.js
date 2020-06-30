import React, {useState} from 'react';

const getAverage = (numbers) => {
    console.log('calculation');
    if (!numbers.length) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = (props) => {
    const [numbers, setNumbers] = useState([]);
    const [num, setNum] = useState('');

    const onChange = (e) => { 
        setNum(parseInt(e.target.value));
    }

    const onInsert = (e) => { 
        const addedNumber = numbers.concat(parseInt(num));
        setNumbers(addedNumber);
        setNum('');
    }

    return (
        <div>
            <input value={num} onChange={onChange} />
            <button onClick={onInsert} >등록</button>

            <ul>
                {numbers.map((number, index) => (
                <li key={index}>{number}</li>
                ))}
            </ul>
            <div>
                <b>평균 값:</b> {getAverage(numbers)}
            </div>
        </div>
    )
}

export default Average;