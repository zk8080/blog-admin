import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import 'braft-editor/dist/output.css';

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
        // const { dispatch } = this.props;
        // dispatch({
        //     type: 'article/getArticleList',
        // })
    }

    render() {
        const { articleState } = this.props;
        const { articleDetail } = articleState;
        console.log(articleDetail, '---articleDetail---');
        return (
            <div>
                文章列表
                <div
                    className="braft-output-content"
                    dangerouslySetInnerHTML={{ __html: articleDetail.content }}
                ></div>
            </div>
        );
    }
}

export default Index;
