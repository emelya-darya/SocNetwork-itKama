import { profileReducer } from "./profileReducer"
import { addCommentAC } from "./profileReducer"     //запись export...from... - импорт и сразу же экспорт
import { changeTextCommentAC } from "./profileReducer"

import { dialogsReducer } from "./dialogsReducer"
import { addMessageAC } from "./dialogsReducer"
import { changeTextAC } from "./dialogsReducer"




const store = {

	_state: {

		forDialogsData: {
			personsData: [
				{ name: 'Vitaliy', id: 1 },
				{ name: 'Vera', id: 2 },
				{ name: 'Tanya', id: 3 },
				{ name: 'Milan', id: 4 },
				{ name: 'Lena', id: 5 },
			],

			messagesData: [
				{ text: 'Hello', id: 1 },
				{ text: 'How are you', id: 2 },
				{ text: "I'm busy", id: 3 },
				{ text: 'Too late', id: 4 },
				{ text: 'I will come', id: 5 },
			],

			newPost: '',
		},

		forProfileData: {
			commentsData: [
				{ id: 1, name: 'My Name', message: 'Lrem gugugyu g yyfufuyfufy y fyfyf yf yf yty f yf y fg yt  ryt f y fyt d d', likesCount: 12 },
				{ id: 2, name: 'Pete Jack', message: 'Lrem gugugyu g f yf y fg yt  ryt  yf yty f yf y fgy f yf y fg yt  ryt f y fyt d d', likesCount: 3 },
			],

			newComment: '',
		},

		forNavbarData: {
			friendsData: [
				{ id: 1, name: 'Anna' },
				{ id: 2, name: 'Vitya' },
				{ id: 3, name: 'Peter' },
				{ id: 4, name: 'Vera' },
				{ id: 5, name: 'Sofi' },
				{ id: 6, name: 'Steve' },
			],
		},
	},

	_callSubscriber: '',


	getState() {
		return this._state
	},

	subscribe (observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {

		this._state.forProfileData = profileReducer(this._state.forProfileData, action)
		this._state.forDialogsData = dialogsReducer(this._state.forDialogsData, action)

		this._callSubscriber(this)

	},

}






export { store }
// export { subscribe }
export { addMessageAC }
export { changeTextAC }
export { addCommentAC }
export { changeTextCommentAC }