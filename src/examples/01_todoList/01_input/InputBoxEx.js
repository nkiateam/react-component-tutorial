import React, {Component} from 'react';
import  { Input } from  'antd';

class InputBoxEx extends Component {
    state = {
        text : '',
    };
    onChangeText = (e) => {
        this.setState({
            text : e.target.value,
        })
    };
    render() {
        return (
            <div className="center">
                <Input
                    placeholder="입력하세요"
                    onChange={e => this.onChangeText(e)}
                    onKeyUp={e => {
                        if(e.keyCode === 13){
                            alert('출력'+this.state.text);
                        }
                    }}
                />
            </div>
        );
    }
}

export default InputBoxEx;
