// npm install axios
import axios from 'axios';

export const getListData = () => {
    const url = `https://ac.finance.naver.com/ac?q=100130&st=111&frm=stock&r_lt=111`;
    return axios({
        url,
        method: 'GET',
    }).then((response) => {
        console.log('response.data  왜안돼>> ', response.data);
        return response.data;
    }).catch((error) => {
        throw new Error(error);
    });
};

export const getListData2 = async () => {
    const url = `https://ac.finance.naver.com/ac?q=100130&st=111&frm=stock&r_lt=111`;

    const aaa = await axios({
        url,
        method: 'GET',
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error);
    });
    console.log('aaaa>', aaa);
    return aaa
};

// http://api.coronatracker.com/v2/analytics/country?limit=20
export const getListData3 = () => {
    // const url = `https://ac.finance.naver.com/ac?q=100130&st=111&frm=stock&r_lt=111`;
    const url = 'http://api.coronatracker.com/v2/analytics/country?limit=20';
    return axios({
        url,
        method: 'GET',
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error);
    });
};

