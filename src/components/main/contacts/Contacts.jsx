import classes from './Contacts.module.css'

export default function Contacts() {
	return (
		<div className={classes.contacts}>
			<ul>
				<li className={classes.contact}>
					<a href='#'>Напишите нам </a>
				</li>
				<li className={classes.contact}>
					<a href='#'>Напишите мне</a>
				</li>
				<li className={classes.contact}>
					<a href='#'>Напишите туда </a>
				</li>
				<li className={classes.contact}>
					<a href='#'>Напишите сюда </a>
				</li>
				<li className={classes.contact}>
					<a href='#'>Напишите отсюда </a>
				</li>
			</ul>
		</div>
	)
}