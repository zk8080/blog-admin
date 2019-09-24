import { getArticleList } from '@/services/article';

const ArticleModel = {
    namespace: 'article',
    state: {
        articleList: [],
        articleDetail: {},
    },
    effects: {
        *getArticleList(_, { call, put }) {
            const response = yield call(getArticleList);
            yield put({
                type: 'saveArticle',
                payload: response,
            });
        },
    },

    reducers: {
        saveArticle(state, action) {
            return { ...state, articleList: action.payload || {} };
        },
        saveDetail(state, action) {
            console.log(action.payload, '---action.payload---');
            return { ...state, articleDetail: action.payload || {} };
        },
    },
};
export default ArticleModel;
