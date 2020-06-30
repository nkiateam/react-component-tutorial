import React, {Component} from 'react';
let list = [];
list.push({ index:1, text:'리액트1'});
list.push({ index:2, text:'리액트2'});
list.push({ index:3, text:'리액트3'});
list.push({ index:4, text:'리액트4'});
list.push({ index:5, text:'리액트5'});

class FillterEx extends Component {
    render() {
        return (
            <div>
                {list
                    .filter(num => num.index > 1)
                    .map(val =>(
                        <h1>{val.text}</h1>
                    ))
                }
            </div>
        );
    }
}

export default FillterEx;
