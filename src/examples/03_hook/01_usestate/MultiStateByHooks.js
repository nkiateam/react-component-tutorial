import React, { useState } from 'react';

function MultiStateByHooks(props) {
    const [name, setName] = useState('')
    const [nickName, setNickName] = useState('')

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

export default MultiStateByHooks;