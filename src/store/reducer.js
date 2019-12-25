const defaultState = {
	searchFocused:false
};
export default (state = defaultState, action) => {
	if(action.type === 'search_focus'){
		return {
			searchFocused:true
		}
	}
	if(action.type === 'search_blur'){
		return {
			searchFocused:false
		}
	}
	return state;
}
