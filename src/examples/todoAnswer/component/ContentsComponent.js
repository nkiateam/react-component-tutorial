import React, {Component} from 'react';
import {Row, Col, Tabs} from 'antd';
import ListComponent from "./03.list/ListComponent";
const { TabPane } = Tabs;

class ContentsComponent extends Component {
    render() {
        const { list, ...other } = this.props;
        return (
            <Row>
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
        );
    }
}

export default ContentsComponent;
