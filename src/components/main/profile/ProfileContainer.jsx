import React from "react"
import { connect } from "react-redux"
import { setProfileAC } from "../../../redux/profileReducer"
import axios from "axios"
import { Profile } from "./Profile"
import { LoadingBG } from "../../common/loading/LoadingBG"



class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/10')
			.then(responce => this.props.setProfile(responce.data))
	}

	render() {
		if (!this.props.profile.photos) return <LoadingBG />
		else return (<Profile profile={this.props.profile} />)
	}
}




const mapStateToProps = function (state) {
	return {
		profile: state.forProfileData.profile
	}
}

const mapDispatchToProps = function (dispatch) {
	return {
		setProfile(profile) {
			let action = setProfileAC(profile)
			dispatch(action)
		}
	}
}


const ProfileContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

export { ProfileContainerWrapper }