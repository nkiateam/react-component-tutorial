import React from 'react';
import withLoading from './withLoading';
import List1 from './List1';
import List2 from './List2';
import * as service from '../../service';
// src/examples/service

class HocTest2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoading: false,
        };
    }

    clickConfirm = async () => {
        this.showLoading();
        const bbb = await service.getListData3();
        console.log('bbb  >>>', bbb);
        this.callApi();
    }

    callApi = () => {
        // API 요청 >> 서버 api 호출 후 2초뒤 응답이 왔다고 가정..
        setTimeout(() => {
            this.hideLoading();
        }, 2000);
    }

    showLoading = () => {
        this.setState({
            showLoading: true,
        });
    }

    hideLoading = () => {
        this.setState({
            showLoading: false,
        });
    }

    render() {
        const { showLoading } = this.state;
        const WithLoadingList = withLoading(List2);
        return (
            <div>
                <button onClick={() => { this.clickConfirm(); }}>조회</button>
                <br />
                - 리스트 컴포넌트 안에 로딩로직이 함께 들어가 있는 예 <br />
                - 목록 컴포넌트가 많아진다면 로딩처리 중복 소스가 늘어남!
                <List1 isLoading={showLoading} data="천영학" />

                <br />
                - 로딩 동작은 withLoading 컴포넌트에서 별도 처리하는 예 <br />
                <WithLoadingList isLoading={showLoading} data="메롱" />
                <br />
                
            </div>
        );
    }
}

export default HocTest2;
