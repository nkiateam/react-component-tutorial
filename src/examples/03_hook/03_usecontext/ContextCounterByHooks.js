import React, {useState, createContext, useContext} from 'react';

// createContext를 통해 만든 데이터를 useContext로 가져와 사용가능합니다.
// 해당 예시는 편의상 counter.js에서 context를 만들었지만
// 일반적으로는 context 디렉터리를 따로 만들어 관리를 합니다.
// 각 컨텍스트를 export하여 필요한 context를 각 컴포넌트에서 useContext로 사용하면 됩니다.
// ThemeContext는 React.createContext가 반환하는 Provider와 Consumer를 가지고 있는 객체입니다.
const ThemeContext = createContext({
    dark: {
        color: '#fff',
        background: '#000'
    },
    white: {
        color: '#000',
        background: '#f'
    }
});

let style = {
    width: '120px',
    height: '36px',
    borderRadius: '5px'
};

const ContextCounterByHooks = (props) => {
    const [num, setNum] = useState(0);
    const theme = useContext(ThemeContext);
    console.log('theme >>>', theme);

    const styleDark = {
        ...style,
        color: theme.dark.color,
        background: theme.dark.background
    };

    const styleWhite = {
        ...style,
        color: theme.white.color,
        background: theme.white.background
      }

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
            <button onClick={onIncreament} style={styleDark}>증가</button>
            <button onClick={onDecreament} style={styleWhite}>감소</button>
        </div>
    )
}

export default ContextCounterByHooks;