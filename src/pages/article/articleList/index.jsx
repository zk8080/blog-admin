import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import { data } from './index.data';

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

    render() {
        const { articleState } = this.props;
        const { articleList } = articleState;
        return (
            <div>
                文章列表
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
