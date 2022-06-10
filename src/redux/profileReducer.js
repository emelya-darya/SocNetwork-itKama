const ADD_COMMENT = 'ADD-COMMENT'
const CHANGE_TEXT_COMMENT = 'CHANGE-TEXT-COMMENT'
const SET_PROFILE = 'SET_PROFILE'


const initialState = {
	profile: {},
	commentsData: [
		{ id: 1, name: 'My Name', message: 'Lrem gugugyu g yyfufuyfufy y fyfyf yf yf yty f yf y fg yt  ryt f y fyt d d', likesCount: 12 },
		{ id: 2, name: 'Pete Jack', message: 'Lrem gugugyu g f yf y fg yt  ryt  yf yty f yf y fgy f yf y fg yt  ryt f y fyt d d', likesCount: 3 },
	],

	newComment: '',
}


const profileReducer = function (state = initialState, action) {

	let stateCopy

	switch (action.type) {
		case ('ADD-COMMENT'):

			let commentText = action.field.value

			if (commentText !== '') {

				let commentObj = {
					id: state.commentsData.length,
					name: 'Pete Jack', // имя пока одно и то же у всех новых
					message: commentText
				}

				stateCopy = {
					...state,
					commentsData: [...state.commentsData, commentObj],
					newComment: ''
				}

				action.field.value = ''
				return stateCopy
			}

		case ('CHANGE-TEXT-COMMENT'):

			stateCopy = {
					...state,
				newComment: action.field.value
			}

			action.field.value = ''
			action.field.value = stateCopy.newComment
			return stateCopy

		case ('SET_PROFILE'):

			stateCopy = { ...state, profile: action.profile }
			return stateCopy

		default: return state
	}
}




const addCommentAC = function (field) {
	return { type: ADD_COMMENT, field: field }
}

const changeTextCommentAC = function (field) {
	return { type: CHANGE_TEXT_COMMENT, field: field }
}

const setProfileAC = function (profile) {
	return { type: SET_PROFILE, profile: profile }
}


export { profileReducer }
export { addCommentAC }
export { changeTextCommentAC }
export { setProfileAC }