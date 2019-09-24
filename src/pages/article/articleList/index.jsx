import React, { Component } from 'react';
import { Table, Form } from 'antd';
import { connect } from 'dva';
import { data } from './index.data';
import QueryForm from './components/QueryForm/index';

@Form.create()
@connect(({ article, loading }) => ({
    articleState: article,
    loading: loading.effects['article/getArticleList'],
}))
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'article/getArticleList',
        });
    }

    handleSearch = e => {
        e.preventDefault();

        const { dispatch, form } = this.props;

        form.validateFields((err, fieldsValue) => {
            if (err) return;

            // const values = {
            //     ...fieldsValue,
            //     updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
            // };
            console.log(fieldsValue, '---fieldsValue---');
            // this.setState({
            //     formValues: values,
            // });

            // dispatch({
            //     type: 'rule/fetch',
            //     payload: values,
            // });
        });
    };

    handleFormReset = () => {
        const { form, dispatch } = this.props;
        form.resetFields();
        // this.setState({
        //   formValues: {},
        // });
        // dispatch({
        //   type: 'rule/fetch',
        //   payload: {},
        // });
    };

    render() {
        const { articleState } = this.props;
        const { articleList } = articleState;
        return (
            <div>
                <QueryForm
                    {...this.props}
                    handleSearch={this.handleSearch}
                    handleFormReset={this.handleFormReset}
                />
                <Table
                    columns={data}
                    dataSource={articleList}
                    rowKey="articleCode"
                    // loading={loading}
                    bordered
                ></Table>
            </div>
        );
    }
}

export default Index;
