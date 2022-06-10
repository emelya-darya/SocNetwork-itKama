import React from 'react'
import shortid from 'shortid'
import classes from './Dialogs.module.css'
import { Message } from './message/Message'
import { Person } from './person/Person'


function Dialogs(props) {
	
	const messages = props.messagesData.map(el => <Message key={shortid.generate()}  message={el.text} />)
	const persons = props.personsData.map(el => <Person key={shortid.generate()} name={el.name} />)

	let newPost = React.createRef()

	// const onAddPost = function () {
	// 	let params = addMessageActionCreator(newPost.current)
	// 	props.dispatch(params)
	// }

	// const onChangeText = function () {
	// 	// let params = changeTextActionCreator(newPost.current)
	// 	text = newPost.current.value
	// 	props.onChangeTextMessage(text)
	// }

	const onAddPost = function () {
		props.onAddMessage(newPost.current)
	}

	const onChangeText = function () {
		props.onChangeTextMessage(newPost.current)
	}

	return (
		<div className={classes.wrapper}>

			<ul className={classes.peoples}>
				{persons}
			</ul>

			<ul className={classes.dialogs__messages}>
				{messages}

				<li>
					<div className={classes.newMessage}>
						<textarea ref={newPost} onInput={onChangeText} className={classes.textarea}></textarea>
						<button onClick={onAddPost} className={classes.addMessage}>Опубликовать</button>
					</div>
				</li>
			</ul>

			

		</div>
	)
}

export { Dialogs }