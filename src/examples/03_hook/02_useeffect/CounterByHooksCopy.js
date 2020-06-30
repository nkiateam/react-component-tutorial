import React, { useState, useEffect } from 'react';

const CounterByHooksCopy = (props) => {
    const [num, setNum] = useState(0)

    // componentDidMount, componentDidUpdate
    useEffect(() => {
        console.log('CounterByHooks component rerender >> ', num);
    })
    
    // 첫번째 인자는 실행될 함수, 두번째 인자는 배열 (빈배열 전달시 마운트 됬을때 한번만 실행됨)
    // useEffect(() => {
    //     console.log('CounterByHooks component rerender >> ', num);
    // }, [])

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

export default CounterByHooksCopy;