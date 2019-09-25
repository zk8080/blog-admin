import React, { Fragment } from 'react';

export const data = [
    {
        title: '标签编码',
        dataIndex: 'tagCode',
        key: 'tagCode',
    },
    {
        title: '标签名',
        dataIndex: 'tagName',
        key: 'tagName',
    },
    {
        title: '文章使用数量',
        dataIndex: 'articleNums',
        key: 'articleNums',
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
