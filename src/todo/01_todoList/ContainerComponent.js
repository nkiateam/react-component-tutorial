import React, {Component} from 'react';
import {Button, Checkbox, Col, Input, Row, Tabs} from 'antd';
const { TabPane } = Tabs;

class ContainerComponent extends Component {

    render() {
        return (
            <div className="APP">
                <div className="wrapper">

                </div>
            </div>
        );
    }
}

class HeaderComponent extends Component {
    render(){
        return(
            <div>
                <h1></h1>
                <div id="add">
                </div>
            </div>
        )
    }
}

class ListComponent extends Component {
    render() {
        return (
            <Row className="todo" >
                <Col
                    span={2}
                    className="action"
                >
                </Col>
                <Col span={18}>
                    {/*<span style={{ textDecoration : todo.complete ? "line-through" : "none"}}>*/}
                    {/*</span>*/}
                </Col>
                <Col
                    span={4}
                    className="action"
                >
                </Col>
            </Row>
        );
    }
}
class ContentsComponent extends  Component {
    render(){
        return(
            <Row >
                <Col span={24}>
                </Col>
            </Row>
        )
    }
}

export default ContainerComponent;
