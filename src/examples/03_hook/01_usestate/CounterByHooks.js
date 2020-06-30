import React, { useState } from 'react';

const CounterByHooks = (props) => { //= function CounterByHooks(props) {
    const [num, setNum] = useState(0)
    //배열구조 분해

    const onIncreament = () => { 
        setNum(num + 1);
    }

    const onDecreament = () => { 
        setNum(num - 1);
    }

    return (
        <div>
            <hr />
            <h2>훅스 기반 카운터</h2>
            <p>현재 카운트 된 수 : {num}</p>
            <button onClick={onIncreament}>증가</button>
            <button onClick={onDecreament}>감소</button>  
        </div>
    )
}

export default CounterByHooks;