import Comment from "./comment/comment";
import classes from "./Comments.module.css"
import shortid from "shortid";



const Comments = function (props) {

	const comments = props.comments.map(
		comment =>
			<Comment key={shortid.generate()} name={comment.name} message={comment.message} likesCount={comment.likesCount} id={comment.id} />
	)

	return (
		<div className={classes.comments}>

			{comments}
			
		</div>
	)
}

export {Comments}