import classes from './comment.module.css'

export default Comment = function (props) {
	return (
		<div className={classes.comment}>
			<div className={classes.avatar}>
				<div className={classes.avatar__photoWrapper}>
					<img src="#" alt="photo" />
				</div>
				<p className={classes.author}>{props.name}</p>
				<p className={classes.likes}>Likes: {props.likesCount}</p>
			</div>
			<div className={classes.message}>{props.message}</div>
		</div>
	)
}