import PostMessage from "./PostMessage"
import { addCommentAC } from '../../../../redux/profileReducer'
import { changeTextCommentAC } from '../../../../redux/profileReducer'
import { connect } from "react-redux"


const mapDispatchToProps = function (dispatch) {
	return {
		onAddComment(field) {
			let action = addCommentAC(field)
			dispatch(action)
		},

		onChangeComment(field) {
			let action = changeTextCommentAC(field)
			dispatch(action)
		}
	}
}

const PostMessageContainer = connect(null, mapDispatchToProps)(PostMessage)

export { PostMessageContainer }






//! Старый вариант контейнерной компоненты

// const PostMessageContainer = function (props) {

// 	function onAddComment(field) {  // принимает поле ввода
// 		let action = addCommentActionCreator(field)
// 		props.store.store.dispatch(action)
// 	}

// 	function onChangeComment(field) {  // принимает поле ввода
// 		let action = changeTextCommentActionCreator(field)
// 		props.store.store.dispatch(action)
// 	}



// 	return <PostMessage onAddComment={onAddComment} onChangeComment={onChangeComment} />
// }