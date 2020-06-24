import React from 'react';
import './App.css';
import  { Input, Button, Row, Col, Checkbox, Tabs}  from 'antd';
const { TabPane } = Tabs;

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonType: 'Add',
            list : [],
            myMessage: '',
            index:0,
        };
    }

    onChangeText = (e) =>{
        this.setState({
            myMessage: e.target.value,
        });
    };
    onSubmit = () =>{
        const { myMessage } = this.state;
        if(myMessage){
            this.setState((state) =>{
                return{
                    list: state.list.concat({
                        id: state.index++,
                        text: myMessage,
                        complete: false
                    }),
                    myMessage:'',
                }
            });
        }
    };

    delete(val) {
        this.setState((state) => {
            return {
                list: state.list.filter(todoList => todoList.id !== val.id)
            }
        });
    }

    onChangeCheckbox(id){
        this.setState((state) => {
            return {
                list: state.list.map(todoList => todoList.id === id ? { ...todoList, complete : !todoList.complete} : todoList),
            }
        });
    };

    render() {
        const { list, myMessage } = this.state;
        return (
            <div className="App">
                <div id="wrapper">
                    <Row>
                        <Col span={24}>
                            <h1>{`// NKIA TODO List`}</h1>
                        </Col>
                    </Row>
                    <div id="add">
                        <Input
                            value={myMessage}
                            placeholder="Type the todo and press enter..."
                            onChange={this.onChangeText}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13) {
                                this.onSubmit()
                                }
                            }}
                        />
                        <Button
                            type="primary"
                            onClick={this.onSubmit}
                        >
                            {this.state.buttonType}
                        </Button>
                    </div>
                    <Row>
                        <Col span={24}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Todos" key="1">
                                    <Row className="todos">
                                        {list
                                            .filter(todo => !todo.complete)
                                            .map(todo => (
                                                <Col
                                                    span={24}
                                                    className="todo"
                                                    key={todo.id}
                                                >
                                                    <Row>
                                                        <Col
                                                            span={2}
                                                            className="action"
                                                        >
                                                            <Checkbox
                                                                defaultChecked={todo.complete}
                                                                onChange={() => this.onChangeCheckbox(todo.id)}
                                                            />
                                                        </Col>
                                                        <Col span={18}>
                                                        <span
                                                            style={{
                                                                textDecoration: todo.complete
                                                                    ? "line-through"
                                                                    : "none"
                                                            }}
                                                        >
                                                            {todo.text}
                                                        </span>
                                                        </Col>
                                                        <Col
                                                            span={4}
                                                            className="action"
                                                        >
                                                            <Button
                                                                type="link"
                                                                onClick={() =>this.delete(todo)}
                                                            >Remove</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            ))}
                                    </Row>
                                </TabPane>
                                <TabPane tab="Completed" key="2">
                                    <Row className="todos">
                                        {list
                                            .filter(todo => todo.complete)
                                            .map(todo => (
                                                <Col
                                                    span={24}
                                                    className="todo"
                                                    key={todo.id}
                                                >
                                                    <Row>
                                                        <Col
                                                            span={2}
                                                            className="action"
                                                        >
                                                            <Checkbox
                                                                defaultChecked={todo.complete}
                                                                onChange={() => this.onChangeCheckbox(todo.id)}
                                                            />
                                                        </Col>
                                                        <Col span={18}>
                                                                    <span
                                                                        style={{
                                                                            textDecoration: todo.complete
                                                                                ? "line-through"
                                                                                : "none"
                                                                        }}
                                                                    >
                                                                        {todo.text}
                                                                    </span>
                                                        </Col>
                                                        <Col
                                                            span={4}
                                                            className="action"
                                                        >
                                                            <Button
                                                                type="link"
                                                                onClick={() =>this.delete(todo)}
                                                            >Remove</Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            ))}
                                    </Row>
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}
export default App;
