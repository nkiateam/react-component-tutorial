import React, { useState, useEffect } from 'react';

const UnmountCounterByHooks = (props) => {
    const [num, setNum] = useState(0)
    
    // useEffect 함수에 반복 호출되는 로직이 있다면 어떻게 될까요???
    useEffect(() => {
        console.log('UnmountCounterByHooks component rerender >> ', num);
        setInterval(() => {
            console.log('[CALLED] setInterval');
        }, 1000)

        // useEffect의 return 함수는 해당 컴포넌트가 마운트 해제됬을때 호출됩니다. (= componentWillUnmount)
        // return () => {
        //     clearInterval(intervalId);
        // };
    })

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

export default UnmountCounterByHooks;