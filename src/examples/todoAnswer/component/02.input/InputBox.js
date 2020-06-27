import React, {Component} from 'react';
import  { Input } from  'antd';

class InputBox extends Component {
    render() {
        const { onSubmit ,text, onChangeText } = this.props;
        return (
            <div id="add">
                <Input
                    placeholder="입력하세요"
                    value={text}
                    onChange={onChangeText}
                    onKeyUp={e => {
                        if(e.keyCode === 13){
                            // alert('출력'+ e.target.value);
                            onSubmit({
                                text: e.target.value,
                            })
                        }
                    }}
                />
            </div>
        );
    }
}

export default InputBox;
