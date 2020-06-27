import React, {Component} from 'react';
import  { Row, Col, Checkbox, Button } from  'antd';

class ListComponent extends Component {
    render() {
        return (
            <Row className="todos">
                <Col
                    span={24}
                    className="todo"
                    // key={todo.index}
                >
                    <Row>
                        <Col
                            span={2}
                            className="action"
                        >
                            //TODO: checkbox
                        </Col>
                        <Col span={18}>
                            {/*<span style={{ textDecoration : todo.complete ? "line-through" : "none"}}>*/}
                            // TODO : text
                            {/*</span>*/}
                        </Col>
                        <Col
                            span={4}
                            className="action"
                        >
                            // TODO: button
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ListComponent;
