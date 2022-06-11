
import React from "react";
import classes from "./Profile.module.css"
import {PostMessage} from './postMessage/PostMessage'
import {UserInfo} from "./userInfo/UserInfo";
import { Comments } from "./comments/Comments";



const Profile = function (props) {

	return (
		<div className={`${classes.main__profile} ${classes.profile}`}>

			<UserInfo profile={props.forProfile.profile} />

			<PostMessage onAddComment={props.forProfile.onAddComment} onChangeComment={props.forProfile.onChangeComment}/>

			<Comments comments={props.forProfile.comments} />
		</div>
	)
}

export {Profile}