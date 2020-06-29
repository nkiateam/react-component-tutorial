import axios from 'axios';

// http://api.coronatracker.com/v2/analytics/country?limit=20
export const getListData = (limitCnt = 20) => {
    const url = `http://api.coronatracker.com/v2/analytics/country?limit=${limitCnt}`;
    return axios({
        url,
        method: 'GET',
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error);
    });
};

