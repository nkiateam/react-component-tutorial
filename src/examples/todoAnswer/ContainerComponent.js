import React, {Component} from 'react';
import '../../Container.css';
import HeaderComponent from "./component/HeaderComponent";
import ContentsComponent from "./component/ContentsComponent";


class ContainerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            index: 0,
        }
    }
    onChangeText = (e) => {
        this.setState({
            myMessage: e.target.value,
        });
    };
    onSubmit = (data) => {
        this.setState({
            list: this.state.list.concat({
                index: this.state.index++,
                text: data.text,
                complete: false,
            }),
            myMessage: '',
        })
    };
    onDelete =(index)=> {
        this.setState({
            list: this.state.list.filter(todo => todo.index !== index)
        });
    };
    onChangeCheckbox = (index) => {
        this.setState({
            list: this.state.list.map(todo => todo.index === index ? { ...todo, complete : !todo.complete} : todo),
        });
    };
    render() {
        const { myMessage, list } = this.state;
        return (
            <div className="APP">
                <div className="wrapper">
                    <HeaderComponent
                        onChangeText={this.onChangeText}
                        text={myMessage}
                        onSubmit={this.onSubmit}
                    />
                    <ContentsComponent
                        list={list}
                        onDelete={this.onDelete}
                        onChangeCheckbox={this.onChangeCheckbox}
                    />
                </div>
            </div>
        );
    }
}

export default ContainerComponent;
