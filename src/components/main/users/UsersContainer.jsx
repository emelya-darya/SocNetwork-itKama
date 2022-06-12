import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { followToggleAC, setUsersAC, changePageAC, setTotalUsersCountAC, isDataLoadingAC, inProgressToggleFollowAC } from "../../../redux/usersReducer"
import { Users } from "./Users"
import { usersFetchingAPI } from "../../../DAL/fetchingAPI"




// В этой компоненте логика взаимодействия со стором (сетевые запросы и изменение currentPage в сторе)
//!В этой компоненте взаимодействие со store
const UsersContainer = function (props) {
	
	useEffect(() => {
		if (props.usersData.length === 0) {
			props.isLoadingSpinnerImgShow(true)

			usersFetchingAPI.getUsers(props.currentPage, props.pageSize)
				.then(responce => {
					props.setTotalUsersCount(responce.totalCount)
					props.setUsers(responce.items)
				})
				.then(props.isLoadingSpinnerImgShow(false))
		}
	}, [])

	const setPage = (numberPage) => {
		props.isLoadingSpinnerImgShow(true)
		
		usersFetchingAPI.getUsers(numberPage, props.pageSize)
			.then(responce => {
				props.setUsers(responce.items)
				props.setNumberPage(numberPage) 
				props.isLoadingSpinnerImgShow(false)
			})
	}

	return <Users	
		setPage={setPage}
		usersData={props.usersData}
		onChangeFollowStat={props.onChangeFollowStat}
		onBlockButtonWhenFetch={props.onBlockButtonWhenFetch}
		totalUsersCount={props.totalUsersCount}
		pageSize={props.pageSize}
		currentPage={props.currentPage}
		/>
	
}



//! В этой компоненте есть информация о redux store
const mapStateToProps = function (state) {
	return {
		usersData: state.forUsersData.usersData,
		pageSize: state.forUsersData.pageSize,
		totalUsersCount: state.forUsersData.totalUsersCount,
		currentPage: state.forUsersData.currentPage,
		isLoading: state.forUsersData.isLoading,
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
		},

		onBlockButtonWhenFetch(id, isInProgress) {
			let action = inProgressToggleFollowAC(id, isInProgress)
			dispatch(action)
		}

	}
}

const UsersContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export { UsersContainerWrapper }