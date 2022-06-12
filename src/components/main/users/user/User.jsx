import classes from './User.module.css'
import userPhoto from '../../../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersFetchingAPI } from '../../../../DAL/fetchingAPI'
import { useEffect, useState } from 'react'



const User = function (props) {

	const onChangeFollowing = function () {
		props.onBlockButtonWhenFetch(props.id, true)
		usersFetchingAPI.onChangeFollowingAPI(props.isFollowed, props.id, props.onChangeFollowStat)
			.then(props.onBlockButtonWhenFetch(props.id, false))	
	}

	return (

		<div className={classes.user} >

			<div className={classes.avatarAndBtn}>

				<NavLink to={props.id && '/profile/' + props.id} className={classes.userLink}>
					<div className={classes.avatar}>
						<img src={props.photoBigSrc ? props.photoBigSrc : userPhoto} />
					</div>
				</NavLink>


				<button disabled={props.isFetchingFollow}
					className={`${props.isFollowed ? classes.btnUnfollow : classes.btnFollow} 
									${props.isFollowed ? classes.disabledBtn : ''}`}
					onClick={onChangeFollowing}>
					<span>{props.isFollowed ? 'Unfollow' : 'Follow'}</span>
				</button>

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