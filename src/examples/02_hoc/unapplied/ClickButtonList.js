import React from 'react';
import List from './List';
import * as service from '../service/api';

class ClickButtonList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoading: false,
            dataSource: [],
        };
    }

    clickBtn = () => {
        this.showLoading();
        this.callApi();
    }

    callApi = async () => {
        const data = await service.getListData(5);
        this.setState({
            dataSource: data,
        }, () => {
            setTimeout(() => {
                this.hideLoading();
            }, 2000); // API 요청 >> 서버 api 호출 후 2초뒤 응답이 왔다고 가정..
        });
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

    authCheck = () => {
        // 권한 체크 API를 조회하던 로그인시 권한을 들고있던 로직이 있다는 가정..
        return Math.random() > 0.5 ? true : false;
    }

    render() {
        // - 리스트 컴포넌트 안에 로딩로직이 함께 들어가 있는 예
        // - 목록 컴포넌트가 많아진다면 로딩처리 중복 소스가 늘어남!
        const { showLoading, dataSource } = this.state;
        return (
            <div>
                <button onClick={() => { this.clickBtn(); }}>조회</button>
                <button disabled={this.authCheck()} onClick={() => { this.clickBtn(); }}>권한버튼</button>
                <br />
                <List isLoading={showLoading} dataSource={dataSource} />
            </div>
        );
    }
}

export default ClickButtonList;
