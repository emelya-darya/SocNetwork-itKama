import { connect } from "react-redux"
import { Friends } from "./Friends"

const mapStateToProps = function (state) {
	return {
		friendsData: state.forNavbarData.friendsData
	}
}

const FriendsContainer = connect(mapStateToProps, null)(Friends)

export { FriendsContainer }