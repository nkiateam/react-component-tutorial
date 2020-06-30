import React, {useState, useMemo} from 'react';

const getAverage = (numbers) => {
    console.log('calculation');
    if (!numbers.length) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const UseMemoAverage = (props) => {
    const [numbers, setNumbers] = useState([]);
    const [num, setNum] = useState('');

    const onChange = (e) => { 
        setNum(parseInt(e.target.value));
    }

    const onInsert = (e) => { 
        const addedNumber = numbers.concat(parseInt(num)); // 기존배열에 값을 합쳐서 새로운 배열을 반환
        setNumbers(addedNumber);
        setNum('');
    }

    //memoization이란 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법을 말합니다.
    //인자 : 첫번째는 결과 값을 생성해주는 팩토리 함수이고, 두번째는 결과값을 재활용할 때 기준이 되는 입력값 배열
    const avg = useMemo(() => getAverage(numbers), [numbers]);
    // const avg = useMemo(() => {
    //     return getAverage(numbers);
    // }, [numbers])

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
                <b>평균 값:</b> {avg}
            </div>
        </div>
    )
}

export default UseMemoAverage;