import React from 'react';

class List extends React.Component {
    render() {
        const { dataSource } = this.props;
        return (
            <div>
                {
                    dataSource.map((item, key) => {
                        return <div key={key}><span>{item.countryName}</span><br /></div>
                    })
                }
            </div>
        );
    }
}

export default List;
