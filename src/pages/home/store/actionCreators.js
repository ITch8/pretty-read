import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList,
	usersList:result.usersList
});
const changeUsers = (result) => ({
	type: constants.CHANGE_USERS_DATA,
	usersList:result.usersList
});

const addHomeList = (list, nextPage,showMore) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: list,
	nextPage,
	showMore
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			console.log(`getHomeInfo......${JSON.stringify(result.usersList)}`)
			dispatch(changHomeData(result));
		});
	}
}
export const changeUsersInfo = () => {
	return (dispatch) => {
		axios.get('/api/users.json').then((res) => {
			const result = res.data;
			console.log(`changeUsers......${JSON.stringify(result.usersList)}`)
			dispatch(changeUsers(result));
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		setTimeout(()=>{
			axios.get('/api/homeList.json?page=' + page).then((res) => {
				const result = res.data.data;
				const showMore = result.length < 8 && page < 5;
				dispatch(addHomeList(result, page + 1,showMore));
			});
		},2000)
	}
}

export const showLoading = (loading) => {
	return (dispatch) => {
		dispatch({
			type: constants.SHOW_LOADING,
			loading
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})