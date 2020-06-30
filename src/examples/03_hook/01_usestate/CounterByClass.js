import React, { Component } from 'react';

class CounterByClass extends Component {
    constructor (props) {
        super(props)
        this.state = {
            num: 0,
        }
    }

    onIncreament = () => { 
        this.setState({
            num: this.state.num + 1,
        });
    }

    onDecreament = () => { 
        this.setState({
            num: this.state.num - 1,
        });
    }

    render() {
        return (
            <div>
              <hr />
              <h2>클래스 기반 카운터</h2>
                <p>현재 카운트 된 수 : {this.state.num}</p>
                <button onClick={this.onIncreament}>증가</button>
                <button onClick={this.onDecreament}>감소</button>  
            </div>
        );
    }
}

export default CounterByClass;