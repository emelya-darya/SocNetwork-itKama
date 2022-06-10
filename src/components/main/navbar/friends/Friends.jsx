import { Friend } from "./friend/Friend"
import classes from "./Friends.module.css"
import shortid from "shortid"


const Friends = function (props) {

	const friends = props.friendsData.map(el => <Friend key={shortid.generate()} name={el.name} />)
	
	return (
		<ul className={classes.friends}>

			{friends}

		</ul>
	)
}

export { Friends }