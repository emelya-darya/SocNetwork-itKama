import classes from './User.module.css'
import userPhoto from '../../../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom'



const User = function (props) {

	const onChangeFollowing = function () {
		let id = props.id
		props.onChangeFollowStat(id)
	}


	return (

		<div className={classes.user} onClick={onChangeFollowing}>

			<div className={classes.avatarAndBtn}>

				<NavLink to={'/profile/' + props.id} className={classes.userLink}>
					<div className={classes.avatar}>
						<img src={props.photoBigSrc ? props.photoBigSrc : userPhoto} />
					</div>
				</NavLink>

				<div className={classes.btnFollowUnfollow}>
					<span>{props.isFollowed ? 'Unfollow' : 'Follow'}</span>
				</div>
			</div>

			<div className={classes.info}>
				<div className={classes.nameAndStatus}>
					<p className={classes.name}> {props.name} </p>
					<p className={classes.status}> {props.status} </p>
				</div>

				<div className={classes.location}>
					<p className={classes.country}> {props.country}, </p>
					<p className={classes.town}> {props.town} </p>
				</div>
			</div>

		</div >

	)
}

export { User }