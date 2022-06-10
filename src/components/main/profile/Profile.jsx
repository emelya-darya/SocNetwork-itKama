
import React from "react";
import classes from "./Profile.module.css"
import { CommentsContainer } from "./comments/CommentsContainer";
import { PostMessageContainer } from "./postMessage/postMessageContainer";
import {UserInfo} from "./userInfo/UserInfo";



const Profile = function (props) {
	// console.log(props.profile);

	return (
		<div className={`${classes.main__profile} ${classes.profile}`}>

			<UserInfo profile={props.profile} />

			<PostMessageContainer store={props} />

			<CommentsContainer store={props} />
		</div>
	)
}

export {Profile}