import { Dialogs } from "./Dialogs"

import { addMessageAC } from '../../../redux/dialogsReducer'
import { changeTextAC } from '../../../redux/dialogsReducer'
import { connect } from "react-redux"




const mapStateToProps = function (state) {
	return {
		messagesData: state.forDialogsData.messagesData,
		personsData: state.forDialogsData.personsData
	}
}

const mapDispatcToProps = function (dispatch) {
	return {
		onChangeTextMessage(field) {
			let action = changeTextAC(field)
			dispatch(action)
		},

		onAddMessage(field) {
			let action = addMessageAC(field)
			dispatch(action)
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatcToProps)(Dialogs)



export { DialogsContainer }







//! Старый вариант контейнерной компоненты
// const DialogsContainer = function (props) {

// 	const messagesData = props.store.getState().forDialogsData.messagesData
// 	const personsData = props.store.getState().forDialogsData.personsData

// 	function onChangeTextMessage(field) { // тут надо передать поле ввода
// 		let action = changeTextAC(field)
// 		props.store.dispatch(action)
// 	}

// 	function onAddMessage(field) { // тут надо передать поле ввода
// 		let action = addMessageAC(field)
// 		props.store.dispatch(action)
// 	}


// 	return <Dialogs
// 		onChangeTextMessage={onChangeTextMessage}
// 		onAddMessage={onAddMessage}
// 		messagesData={messagesData}
// 		personsData={personsData} />
// }