import React from 'react';
import withAuth from './withAuth';

class AuthButton extends React.Component {
    clickBtn = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const { isAuth } = this.props;
        return (
        <button 
            style={{backgroundColor: 'yellow'}} //inline으로 style 예시, className으로 디자인 적용 권장
            onClick={() => { this.clickBtn(); }} disabled={!isAuth}>
            {this.props.children}
        </button>
        );
    }
}

export default withAuth(AuthButton);
