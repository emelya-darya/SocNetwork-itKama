const SET_AUTH_STATE = 'SET_AUTH_STATE'
const SET_AVATAR = 'SET_AVATAR'
const IS_FETCHING = 'IS_FETCHING'


const initialState = {
	id: null,
	email: null,
	login: null,
	avatar: null,
	isAuth: false,
	isFetching: false
}

const authReducer = function (state = initialState, action) {

	let stateCopy

	switch (action.type) {

		case (SET_AUTH_STATE):
			stateCopy = {...state, ...action.authData, isAuth: true }
			return stateCopy

		case (SET_AVATAR): {
			stateCopy = { ...state, avatar: action.avatarSrc }
			return stateCopy
		}
			
		case (IS_FETCHING):
			stateCopy = { ...state, isFetching: action.isFetching }
			return stateCopy
			
		default: return state
	}
}

const setAuthDataAC = function (authData) {
	return { type: SET_AUTH_STATE, authData: authData }
}

const setAvatarAC = function (avatarSrc) {
	return { type: SET_AVATAR, avatar: avatarSrc }
}

const isFetchingAC = function (isFetching) {
	return { type: IS_FETCHING, isFetching: isFetching }
}


export { authReducer }
export { setAuthDataAC }
export { setAvatarAC }
export { isFetchingAC }