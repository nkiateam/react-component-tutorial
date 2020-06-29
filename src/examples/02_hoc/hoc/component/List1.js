import React from 'react';

class List1 extends React.Component {
    render() {
        const { isLoading } = this.props;
        return (
            <div>
                {
                    isLoading ? 
                    <span>Loading...</span>
                    :
                    <div>
                        {this.props.data} <br />
                        item1 <br />
                        item2 <br />
                        item3 <br />
                        item4 <br />
                        item5 <br />
                    </div>
                }
            </div>
        );
    }
}

export default List1;
