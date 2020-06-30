import React, { useState, useEffect } from 'react';

function MultiStateByHooksCopy(props) {
    const [name, setName] = useState('')
    const [nickName, setNickName] = useState('')

    // 두번째 인자값이 오면 해당 값이 변경될때만 리렌더됨. 
    // name대신 nickName으로 바꿔서 테스트해보세요.
    useEffect(() => {
        console.log('상태 name 업데이트로 rerender >> ', name);
    }, [name])

    const onChangeName = (e) => { 
        setName(e.target.value);
    }

    const onChangeNickName = (e) => { 
        setNickName(e.target.value);
    }

    return (
        <div>
            <hr />
            <h2>여러 input을 가진 입력폼</h2>
            <label>이름 입력: </label>
            <input onChange={onChangeName} />
            
            <label>닉네임 입력: </label>
            <input onChange={onChangeNickName} />
            
            <h2>입력된 데이터</h2>
            <p>이름: {name}, 닉네임: {nickName}</p>
        </div>
    )
}

export default MultiStateByHooksCopy;