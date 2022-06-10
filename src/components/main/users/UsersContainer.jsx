import React from "react"
import * as axios from 'axios'
import { connect } from "react-redux"
import { followToggleAC, setUsersAC, changePageAC, setTotalUsersCountAC, isDataLoadingAC } from "../../../redux/usersReducer"
import { Users } from "./Users"



//! В этой компоненте логика взаимодействия со стором (сетевые запросы и изменение currentPage в сторе)
class UsersContainer extends React.Component {

	componentDidMount() {  // сработает только при первом рендеринге
		if (this.props.usersData.length === 0) {
			this.props.isLoadingSpinnerImgShow(true)

			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(responce => {
					this.props.setTotalUsersCount(responce.data.totalCount)
					this.props.setUsers(responce.data.items)

					this.props.isLoadingSpinnerImgShow(false)
				})
		}
	}


	onSetPage = async (numberPage) => {

		this.props.isLoadingSpinnerImgShow(true)
		
		await this.props.setNumberPage(numberPage)

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(responce => {
				this.props.setUsers(responce.data.items)
				this.props.isLoadingSpinnerImgShow(false)
			})
	}

	onPrevPage = () => {
		let prevPage = this.props.currentPage - 1
		this.onSetPage(prevPage <= 0 ? 1 : prevPage)
	}

	onNextPage = () => {
		let nextPage = this.props.currentPage + 1
		this.onSetPage(nextPage > this.props.pagesCount ? this.props.pagesCount : nextPage)
	}


	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		return <Users
			pagesCount={pagesCount}
			onSetPage={this.onSetPage}
			onPrevPage={this.onPrevPage}
			onNextPage={this.onNextPage}
			currentPage={this.props.currentPage}
			onChangeFollowStat={this.props.onChangeFollowStat}
			usersData={this.props.usersData}
			isLoading={this.props.isLoading}
		/>
	}
}



//! В этой компоненте есть информация о store
const mapStateToProps = function (state) {
	return {
		usersData: state.forUsersData.usersData,
		pageSize: state.forUsersData.pageSize,
		totalUsersCount: state.forUsersData.totalUsersCount,
		currentPage: state.forUsersData.currentPage,
		isLoading: state.forUsersData.isLoading
	}
}

const mapDispatchToProps = function (dispatch) {
	return {

		onChangeFollowStat(userId) {
			let action = followToggleAC(userId)
			dispatch(action)
		},

		setUsers(usersArr) {
			let action = setUsersAC(usersArr)
			dispatch(action)
		},

		setNumberPage(currentPage) {
			let action = changePageAC(currentPage)
			dispatch(action)
		},

		setTotalUsersCount(totalUsersCount) {
			let action = setTotalUsersCountAC(totalUsersCount)
			dispatch(action)
		},

		isLoadingSpinnerImgShow(isLoading) {
			let action = isDataLoadingAC(isLoading)
			dispatch(action)
		}


	}
}

const UsersContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export { UsersContainerWrapper }