const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'


const initialState = {
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
}

const dialogsReducer = function (state = initialState, action) {

   let stateCopy 

	switch (action.type) {

		case ('ADD-POST'):

			if (action.field.value !== '') {
				let newMessage = {
					text: action.field.value,
					id: state.messagesData.length
				}

				stateCopy = {
					...state,
					messagesData: [...state.messagesData, newMessage],
					newPost: ''
				}
				
				action.field.value = ''
				return stateCopy
			}

		case ('CHANGE-TEXT'): 
			stateCopy = {
				...state,
				newPost: action.field.value
			}

			action.field.value = ''
			action.field.value = stateCopy.newPost
			return stateCopy
	
		default: return state
	}
}

const addMessageAC = function (field) {
	return { type: ADD_POST, field: field }
}

const changeTextAC = function (field) {
	return { type: CHANGE_TEXT, field: field }
}


export { dialogsReducer }
export { addMessageAC }
export { changeTextAC }