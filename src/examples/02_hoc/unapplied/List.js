import React from 'react';
// import { Table } from 'antd';

class List extends React.Component {

    render() {
        // const columns = [
        //     {
        //         title: 'countryCode',
        //         dataIndex: 'countryCode'
        //     },
        //     {
        //         title: 'countryName',
        //         dataIndex: 'countryName'
        //     },
        // ];

        const { isLoading, dataSource } = this.props;
        return (
            <div>
                {
                    isLoading ? 
                    <span>Loading...</span>
                    :
                    dataSource.map((item, key) => {
                        return <div key={key}><span>{item.countryName}</span><br /></div>
                    })
                    // <Table
                    //     dataSource={dataSource}
                    //     columns={columns}
                    // />
                }
            </div>
        );
    }
}

export default List;
