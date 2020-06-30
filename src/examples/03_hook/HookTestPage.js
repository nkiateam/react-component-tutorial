import React, { Component } from 'react';
import CounterByClass from './01_usestate/CounterByClass';
import CounterByHooks from './01_usestate/CounterByHooks';
import MultiStateByHooks from './01_usestate/MultiStateByHooks';

import CounterByHooksCopy from './02_useeffect/CounterByHooksCopy';
import MultiStateByHooksCopy from './02_useeffect/MultiStateByHooksCopy';
// import UnmountCounterByHooks from './02_useeffect/UnmountCounterByHooks';

import ContextCounterByHooks from './03_usecontext/ContextCounterByHooks';
import ReducerCounterByHooks from './04_usereducer/ReducerCounterByHooks';

import Average from './05_usememo/Average';
import UseMemoAverage from './05_usememo/UseMemoAverage';

import UseCallbackAverage from './06_usecallback/UseCallbackAverage';

// https://m.blog.naver.com/pjt3591oo/221905968173
class hookTestPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShow: true,
        }
    }

    setIsShow = () => {
        this.setState({
            isShow: !this.state.isShow,
        });
    }

    render() {
        return (
            <div>
                <br /><hr />
                <h2><b>useState 실습</b></h2>
                <CounterByClass />
                <CounterByHooks />
                <MultiStateByHooks />


                <br /><hr />
                <h2><b>useEffect 실습</b></h2>
                <CounterByHooksCopy />
                <MultiStateByHooksCopy />
                
                {/* { this.state.isShow && <UnmountCounterByHooks /> }
                <button onClick={this.setIsShow}>컴포넌트 마운트/마운트해제 테스트</button>   */}


                <br /><hr />
                <h2><b>useContext 실습</b></h2>
                <ContextCounterByHooks />


                <br /><hr />
                <h2><b>useReducer 실습</b></h2>
                <ReducerCounterByHooks />


                <br /><hr />
                <h2><b>useMemo 실습</b></h2>
                <Average />
                <UseMemoAverage />
                

                <br /><hr />
                <h2><b>useCallback 실습</b></h2>
                <UseCallbackAverage />
            </div>
        );
    }
}




export default hookTestPage;