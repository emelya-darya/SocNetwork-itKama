import { connect } from "react-redux"
import Comments from "./Comments"


const mapStateToProps = function (state) {
	return { commentsData: state.forProfileData.commentsData }
}

const CommentsContainer = connect(mapStateToProps, null)(Comments)

export { CommentsContainer }




//!Старый вариант контейнерной компоненты
// const CommentsContainer = function (props) {

// 	const commentsData = props.store.store.getState().forProfileData.commentsData

// 	return <Comments commentsData={commentsData} />
// }