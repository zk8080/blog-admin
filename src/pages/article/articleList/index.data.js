import React, { Fragment } from 'react';

export const data = [
    {
        title: '文章编码',
        dataIndex: 'articleCode',
        key: 'articleCode',
    },
    {
        title: '文章名称',
        dataIndex: 'articleName',
        key: 'articleName',
    },
    {
        title: '分类',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',
    },
    {
        title: '留言数',
        dataIndex: 'commentCount',
        key: 'commentCount',
    },
    {
        title: '操作',
        dataIndex: 'opreate',
        key: 'opreate',
        render: (text, record) => (
            <Fragment>
                <span>操作</span>
            </Fragment>
        ),
    },
];
