const getArticle = (req, res) => {
    res.json([
        {
            articleCode: '000000001',
            articleName: '测试1234',
            type: '123456',
            tag: '123',
            commentCount: 10,
        },
    ]);
};

export default {
    'GET /api/getArticleList': getArticle,
};
