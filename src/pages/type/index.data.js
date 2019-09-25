import React, { Fragment } from 'react';

export const data = [
    {
        title: '分类编码',
        dataIndex: 'typeCode',
        key: 'typeCode',
    },
    {
        title: '分类名',
        dataIndex: 'typeName',
        key: 'typeName',
    },
    {
        title: '文章数量',
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
