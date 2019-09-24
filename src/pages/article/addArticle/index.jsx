import React, { Component } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { connect } from 'dva';
import { Form, Input, Button, Checkbox, Row, Col, Modal } from 'antd';
import Markdown from 'braft-extensions/dist/markdown';
import style from './index.less';
import 'braft-editor/dist/output.css';

const FormItem = Form.Item;
BraftEditor.use(Markdown());

@connect(({ article }) => ({
    article,
}))
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(null),
            visible: false,
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    ...values,
                    content: values.content.toHTML(), // or values.content.toHTML()
                };
                console.log(submitData);
                const { dispatch } = this.props;
                dispatch({
                    type: 'article/saveDetail',
                    payload: submitData,
                });
            }
        });
    };

    handleChange = editorState => {
        this.setState({ editorState });
    };

    preview = () => {
        this.setState({
            visible: true,
        });
    };

    closeModal = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible, editorState } = this.state;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 22 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 22,
                    offset: 2,
                },
            },
        };
        const extendControls = [
            {
                key: 'custom-button',
                type: 'button',
                text: '预览',
                onClick: this.preview,
            },
        ];
        return (
            <div className={style.addArticle}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <FormItem label="文章标题">
                        {getFieldDecorator('title', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入标题',
                                },
                            ],
                        })(<Input size="large" placeholder="请输入标题" />)}
                    </FormItem>
                    <FormItem label="文章分类">
                        {getFieldDecorator('type', {
                            initialValue: ['A', 'B'],
                            rules: [
                                {
                                    required: true,
                                    message: '请选择分类',
                                },
                            ],
                        })(
                            <Checkbox.Group style={{ width: '100%' }}>
                                <Row>
                                    <Col span={4}>
                                        <Checkbox value="A">A</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="B">B</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="C">C</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="D">D</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="E">E</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>,
                        )}
                    </FormItem>
                    <FormItem label="文章标签">
                        {getFieldDecorator('tag', {
                            initialValue: ['A', 'B'],
                            rules: [
                                {
                                    required: true,
                                    message: '请选择标签',
                                },
                            ],
                        })(
                            <Checkbox.Group style={{ width: '100%' }}>
                                <Row>
                                    <Col span={4}>
                                        <Checkbox value="A">A</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="B">B</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="C">C</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="D">D</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox value="E">E</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>,
                        )}
                    </FormItem>
                    <FormItem label="文章正文">
                        {getFieldDecorator('content', {
                            validateTrigger: 'onBlur',
                            rules: [
                                {
                                    required: true,
                                    validator: (_, value, callback) => {
                                        if (value.isEmpty()) {
                                            callback('请输入正文内容');
                                        } else {
                                            callback();
                                        }
                                    },
                                },
                            ],
                        })(
                            <BraftEditor
                                className={style.myEditor}
                                onChange={this.handleChange}
                                extendControls={extendControls}
                                placeholder="请输入正文内容"
                                contentStyle={{ height: 300 }}
                            />,
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button size="large" type="primary" htmlType="submit">
                            提交
                        </Button>
                    </FormItem>
                </Form>
                <Modal
                    visible={visible}
                    onCancel={this.closeModal}
                    wrapClassName={style.previewModal}
                    width={1100}
                    footer={null}
                >
                    <div
                        className="braft-output-content"
                        dangerouslySetInnerHTML={{ __html: editorState.toHTML() }}
                    ></div>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(Index);
