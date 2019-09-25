import React, { Component } from 'react';
import { Row, Col, Form, Input, Select, Icon, Button, InputNumber, DatePicker } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.formLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 13 },
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.queryListForm}>
                <Form layout="inline" onSubmit={this.props.handleSearch}>
                    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                        <Col md={8} sm={24}>
                            <FormItem label="规则名称">
                                {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                            </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                            <FormItem label="使用状态">
                                {getFieldDecorator('status')(
                                    <Select placeholder="请选择" style={{ width: '100%' }}>
                                        <Option value="0">关闭</Option>
                                        <Option value="1">运行中</Option>
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                            <FormItem label="调用次数">
                                {getFieldDecorator('number')(
                                    <InputNumber style={{ width: '100%' }} />,
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                        <Col md={8} sm={24}>
                            <FormItem label="更新日期">
                                {getFieldDecorator('date')(
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        placeholder="请输入更新日期"
                                    />,
                                )}
                            </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                            <FormItem label="使用状态">
                                {getFieldDecorator('status3')(
                                    <Select placeholder="请选择" style={{ width: '100%' }}>
                                        <Option value="0">关闭</Option>
                                        <Option value="1">运行中</Option>
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                            <FormItem label="使用状态">
                                {getFieldDecorator('status4')(
                                    <Select placeholder="请选择" style={{ width: '100%' }}>
                                        <Option value="0">关闭</Option>
                                        <Option value="1">运行中</Option>
                                    </Select>,
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ marginBottom: 24 }}>
                            <Button type="primary" htmlType="submit">
                                查询
                            </Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.props.handleFormReset}>
                                重置
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Index;
