import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from 'react-router-dom'
import { setProfileAC, addCommentAC, changeTextCommentAC } from "../../../redux/profileReducer"
import axios from "axios"
import { Profile } from "./Profile"
import { LoadingBG } from "../../common/loading/LoadingBG"



//! компонента, выполняющая запрос на сервак
const ProfileContainer = function (props) {

	let userId = useParams().userId
	if(!userId) userId = 2
	
	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
			.then(responce => props.setProfile(responce.data))
	}, [])


	if (!props.profile.photos) return <LoadingBG />
	else return (<Profile forProfile={props} />)

}




const mapStateToProps = function (state) {
	return {
		profile: state.forProfileData.profile,
		comments: state.forProfileData.commentsData,
		newCommentField: state.forProfileData.newComment
	}
}

const mapDispatchToProps = function (dispatch) {
	return {
		setProfile(profile) {
			let action = setProfileAC(profile)
			dispatch(action)
		},

		onAddComment(field) {
			let action = addCommentAC(field)
			dispatch(action)
		},

		onChangeComment(field) {
			let action = changeTextCommentAC(field)
			dispatch(action)
		}
	}
}

//! Компонента, прокидывающая методы и информацию со стора
const ProfileContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)


export { ProfileContainerWrapper }