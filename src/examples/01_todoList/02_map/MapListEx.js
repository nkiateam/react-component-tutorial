import React, {Component} from 'react';
let list = [];
list.push({ index:1, text:'리액트1'});
list.push({ index:2, text:'리액트2'});
list.push({ index:3, text:'리액트3'});

class MapList extends Component {

    render() {
        return (
            <div>
                {list.map((val) => (
                    <h1>{val.index + 3}</h1>
                    ))}
            </div>
        );
    }
}

export default MapList;
