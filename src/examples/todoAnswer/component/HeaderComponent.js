import React, {Component} from 'react';
import Title from "./01.title/Title";
import InputBox from "./02.input/InputBox";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Title/>
                <InputBox
                    {...this.props}
                />
            </div>
        );
    }
}

export default HeaderComponent;
