
import React from 'react'
import classes from './PostMessage.module.css'


const PostMessage = function(props) {

	const textField = React.createRef()

	// function onAddComment() {
	// 	let params = addCommentActionCreator(textField.current)
	// 	props.dispatch(params)
	// }

	// function onChangeComment() {
	// 	let params = changeTextCommentActionCreator(textField.current)
	// 	props.dispatch(params)
	// }

	function onChangeComment() {
		props.onChangeComment(textField.current)
	}

	function onAddComment() {
		props.onAddComment(textField.current)
	}


	return (
		<div className={classes.message}>
			<p className={classes.message__title}>Введите сообщение:</p>
			<div className={classes.message__form} >
				<textarea onInput={onChangeComment} ref={textField} className={classes.message__textarea} placeholder="Type message..."></textarea>
				<button onClick={onAddComment} className={classes.btn} type="submit">Отправить</button>
			</div>
		</div>
	)
}

export {PostMessage}