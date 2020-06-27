import React, {Component} from 'react';
import  { Row, Col } from  'antd';

class Title extends Component {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <h1>NKIA-TODOLIST</h1>
                </Col>
            </Row>
        );
    }
}

export default Title;
