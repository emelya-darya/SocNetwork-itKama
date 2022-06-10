import classes from './Message.module.css'

function Message(props) {
	return (
		<li className={classes.dialogs__message}> {props.message} </li>
	)
}

export { Message }