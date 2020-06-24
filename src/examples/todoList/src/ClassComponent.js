// @flow strict

import React from 'react';
import  { Input, Button }  from 'antd';


class ClassComponent extends React.Component{
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = { // 이 컴포넌트의 state 설정
          myMessage: '' // myMessage 초기 값 설정
        };
      };
    onChangeText = (e) =>{
        this.setState({
            myMessage: e.target.value,
        });
    };
    onSubmit = () =>{
        const { myMessage } = this.state;
        if(myMessage){
            alert(myMessage);
            this.setState({
                myMessage:'',
            })
        }
    };
    render() {
        const { myMessage } = this.state;
        return (
            <div>
                        <Input
                            value={myMessage}
                            placeholder="Type the todo and press enter..."
                            style={{width: '300px'}}
                            onChange={this.onChangeText}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13) {
                                    this.onSubmit()
                                }
                            }}
                        />
                        <Button
                            type="primary"
                            onClick={() => this.onSubmit()}
                        >
                            Add
                        </Button>
                    </div>
        );
    }
}

export default ClassComponent;