import React from 'react';

class HocButtonTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoading: false,
        };
    }

    clickConfirm = () => {
        this.showLoading();
    }

    showLoading = () => {
        this.setState({
            showLoading: true,
        }, () => {
            setTimeout(() => {
                this.hideLoading();
            }, 1000);
        });
    }

    hideLoading = () => {
        this.setState({
            showLoading: false,
        });
    }

    render() {
        const { showLoading } = this.state;
        return (
            <div>
                { 
                    showLoading === true ? 
                        <span>Loading....</span>
                    : 
                    <button onClick={() => { this.clickConfirm(); }}>확인</button>
                }
            </div>
        );
    }
}

export default HocButtonTest;
