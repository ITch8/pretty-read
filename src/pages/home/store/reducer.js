import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	usersList:[],
	articlePage: 1,
	showScroll: false,
	showMore:true,
	loading:false
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: action.articleList,
		recommendList: fromJS(action.recommendList),
		usersList: action.usersList
	});
};

const changeUsersData = (state, action) => {
	return state.merge({
		usersList: action.usersList
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage,
		'showMore':action.showMore,
		'loading':false
	});
};
//显示加载菊花
const showLoading = (state, action) => {
	return state.merge({
		'loading':action.loading
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.CHANGE_USERS_DATA:
			return changeUsersData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
		case constants.SHOW_LOADING:
			console.log(`SHOW_LOADING.....${action.loading}`)
			return showLoading(state,action);
		default:
			return state;
	}
}