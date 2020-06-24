import React from 'react';
import './App.css';
import  { Input, Button, Row, Col, Checkbox, Tabs}  from 'antd';
const { TabPane } = Tabs;

class ListComponent extends React.Component{
    render(){
        const { todo, onChangeCheckbox, onDelete } = this.props;
        return(
            <Row className="todos">
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
                                onChange={() => onChangeCheckbox(todo.id)}
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
                                onClick={() =>onDelete(todo)}
                            >Remove</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

class BodyComponet extends React.Component{

    render(){
        const { list, onChangeCheckbox, onDelete } = this.props;
        return(
            <Row>
                <Col span={24}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Todos" key="1">
                                {list
                                    .filter(todo => !todo.complete)
                                    .map(todo => (
                                        <ListComponent
                                            key={todo.id}
                                            todo={todo} 
                                            onChangeCheckbox={onChangeCheckbox} 
                                            onDelete={onDelete}
                                        />
                                    ))}
                        </TabPane>
                        <TabPane tab="Completed" key="2">
                                {list
                                    .filter(todo => todo.complete)
                                    .map(todo => (
                                        <ListComponent
                                            key={todo.id}
                                            todo={todo} 
                                            onChangeCheckbox={onChangeCheckbox} 
                                            onDelete={onDelete}
                                        />
                                    ))}
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

class HeaderComponent extends React.Component {
    render(){
        const { myMessage, onSubmit, onChangeText } = this.props;
        return(
            <div>
            <Row>
                <Col span={24}>
                    <h1>{`// NKIA TODO List`}</h1>
                </Col>
            </Row>
            <div id="add">
                <Input
                    value={myMessage}
                    placeholder="Type the todo and press enter..."
                    onChange={onChangeText}
                    onKeyUp={(e) => {
                        if(e.keyCode === 13) {
                            onSubmit()
                        }
                    }}
                />
                <Button
                    type="primary"
                    onClick={() => onSubmit()}
                >
                    Add
                </Button>
            </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
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
            this.setState({
                list: this.state.list.concat({
                    id: this.state.index++,
                    text: myMessage,
                    complete: false
                }),
                myMessage:'',
            })
        }
    };

    delete = (val) => {
        this.setState({
                list: this.state.list.filter(todoList => todoList.id !== val.id)
        });
    }

    onChangeCheckbox = (id) =>{
        this.setState({
                list: this.state.list.map(todoList => todoList.id === id ? { ...todoList, complete : !todoList.complete} : todoList),
        });
    };

    render() {
        const { list, myMessage } = this.state;
        return (
            <div className="App">
                <div className="wrapper">
                    <HeaderComponent
                        myMessage={myMessage}
                        onChangeText={this.onChangeText}
                        onSubmit={this.onSubmit}
                    />
                    <BodyComponet 
                        list={list}
                        onChangeCheckbox={this.onChangeCheckbox} 
                        onDelete={this.delete}  
                    />
                    
                </div>
            </div>
        );
    }

}
export default App;
