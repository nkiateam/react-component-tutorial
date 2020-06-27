import React, {Component} from 'react';
import  { Row, Col, Checkbox, Button } from  'antd';

class ListComponent extends Component {
    render() {
        const { todo, onDelete, onChangeCheckbox  } = this.props;
        return (
            <Row className="todos">
                <Col
                    span={24}
                    className="todo"
                    key={todo.index}
                >
                    <Row>
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
                </Col>
            </Row>
        );
    }
}

export default ListComponent;
