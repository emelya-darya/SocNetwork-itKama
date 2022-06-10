import classes from './Friend.module.css'

const Friend = function (props) {
	return (
		<li className={classes.friend}>
			<a href="#" className={classes.friend__link}>
				<div className={classes.photo__wrapper}>
					<img src="#" alt="photo" />
				</div>
				<p className={classes.friend__name}> {props.name} </p>
			</a>
		</li>
	)
}

export { Friend }