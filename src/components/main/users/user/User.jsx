import classes from './User.module.css'
import userPhoto from '../../../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersFetchingAPI } from '../../../../DAL/fetchingAPI'



const User = function (props) {


	const onChangeFollowing = function () {
		usersFetchingAPI.onChangeFollowingAPI(props.isFollowed, props.id, props.onChangeFollowStat)
	}
	

	// const onChangeFollowing = function () {
	// 	let id = props.id

	// 	if (!props.isFollowed) {
	// 		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null,
	// 			{ withCredentials: true, headers: { "API-KEY": "ae76e4af-a97a-40e5-9331-26f02d2b6dce" } })
	// 			.then(responce => { if (responce.data.resultCode == 0) props.onChangeFollowStat(id) })
	// 	} else {
	// 		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
	// 			{ withCredentials: true, headers: { "API-KEY": "ae76e4af-a97a-40e5-9331-26f02d2b6dce" } })
	// 			.then(responce => { if (responce.data.resultCode == 0) props.onChangeFollowStat(id) })
	// 	}

	// }


	return (

		<div className={classes.user} >

			<div className={classes.avatarAndBtn}>

				<NavLink to={'/profile/' + props.id} className={classes.userLink}>
					<div className={classes.avatar}>
						<img src={props.photoBigSrc ? props.photoBigSrc : userPhoto} />
					</div>
				</NavLink>


				<div className={props.isFollowed ? classes.btnUnfollow : classes.btnFollow} onClick={onChangeFollowing}>
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