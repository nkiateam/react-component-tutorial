import React from 'react';
import withLoading from './withLoading';
import AuthButton from './AuthButton';
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

    render() {
        // - 로딩 동작은 withLoading 컴포넌트에서 별도 처리하는 예 <br />

        const { showLoading, dataSource } = this.state;
        const WithLoadingList = withLoading(List);
        return (
            <div>
                <button onClick={() => { this.clickBtn(); }}>조회</button>
                <AuthButton onClick={() => { this.clickBtn(); }}>권한버튼</AuthButton>
                <br />
                <WithLoadingList isLoading={showLoading} dataSource={dataSource} />
                <br />
                
            </div>
        );
    }
}

export default ClickButtonList;
