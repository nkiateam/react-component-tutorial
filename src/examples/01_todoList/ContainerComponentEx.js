import React, {Component} from 'react';
import {Button, Checkbox, Col, Input, Row, Tabs} from 'antd';
const { TabPane } = Tabs;

class HeaderComponent extends Component {
    render(){
        const { onChangeText, onSubmit, text } = this.props;
        return(
            <div>
                <h1>NKIA-TODOLIST</h1>
                <div id="add">
                    <Input
                        placeholder="입력하세요"
                        value={text}
                        onChange={onChangeText}
                        onKeyUp={e => {
                            if(e.keyCode === 13){
                               onSubmit()
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

class ListComponent extends Component {
    render() {
        const { todo, onDelete, onChangeCheckbox  } = this.props;
        return (
            <Row className="todo" >
                <Col
                    span={2}
                    className="action"
                >
                    <Checkbox
                        defaultChecked={todo.complete}
                        onChange={() => onChangeCheckbox(todo.index)}
                    />
                </Col>
                <Col span={18}>
                    <span style={{ textDecoration : todo.complete ? "line-through" : "none"}}>
                        {todo.text}
                    </span>
                </Col>
                <Col
                    span={4}
                    className="action"
                >
                    <Button type="link" onClick={() => onDelete(todo.index)}>
                        Remove
                    </Button>
                </Col>
            </Row>
        );
    }
}
class ContentsComponent extends  Component {
    render(){
        const { list, ...other } = this.props;
        return(
            <Row >
                <Col span={24}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Todos" key="1">
                            {list
                                .filter(todo => !todo.complete)
                                .map(
                                    todo => (
                                        <ListComponent
                                            key={todo.index}
                                            todo={todo}
                                            {...other}
                                        />
                                    )
                                )}
                        </TabPane>
                        <TabPane tab="Completed" key="2">
                            {list
                                .filter(todo => todo.complete)
                                .map(
                                    todo => (
                                        <ListComponent
                                            key={todo.index}
                                            todo={todo}
                                            {...other}
                                        />
                                    )
                                )}
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

class ContainerComponentEx extends Component {
    state = {
        text : '',
        list: [],
        index: 0,
    };

    onChangeText = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    onSubmit = () => {
        this.setState({
            list: this.state.list.concat({
                index: this.state.index++,
                text: this.state.text,
                complete: false,
            }),
            text: '',
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
        const { text, list } = this.state;
        return (
            <div className="APP">
                <div className="wrapper">
                    <HeaderComponent
                        onChangeText={this.onChangeText}
                        onSubmit={this.onSubmit}
                        text={text}
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

export default ContainerComponentEx;
