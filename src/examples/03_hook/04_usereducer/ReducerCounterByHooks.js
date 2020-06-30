import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { num: state.num + 1 };
        case 'DECREMENT':
            return { num: state.num - 1 };
        default:
            return state;
    }
}

const ReducerCounterByHooks = (props) => {
    // const [num, setNum] = useState(0);
    const [state, dispatch] = useReducer(reducer, { num: 0 });

    const onIncreament = () => { 
        dispatch({type: 'INCREMENT'})
    }

    const onDecreament = () => { 
        dispatch({type: 'DECREMENT'})
    }

    return (
        <div>
            <hr />
            <h2>훅스 기반 카운터</h2>
            <p>현재 카운트 된 수 : {state.num}</p>
            <button onClick={onIncreament} >증가</button>
            <button onClick={onDecreament} >감소</button>
        </div>
    )
}

export default ReducerCounterByHooks;