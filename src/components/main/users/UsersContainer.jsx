import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { followToggleAC, setUsersAC, changePageAC, setTotalUsersCountAC, isDataLoadingAC, inProgressToggleFollowAC } from "../../../redux/usersReducer"
import {  getUsersThunkCreator, setPageThunkCreator, changeFollowingThunkCreator } from "../../../redux/usersReducer"
import { Users } from "./Users"




// В этой компоненте логика взаимодействия со стором (сетевые запросы и изменение currentPage в сторе)
//!В этой компоненте взаимодействие со store
const UsersContainer = function (props) {
	
	useEffect(() => {
		if (props.usersData.length === 0) props.getUsers(props.currentPage, props.pageSize)
	}, [])

	return <Users	
		setPage={props.setPage}
		usersData={props.usersData}
		changeFolowStat={props.changeFolowStat}
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
		},

		getUsers(currentPage, pageSize) {
			let thunkCreator = getUsersThunkCreator(currentPage, pageSize)
			dispatch(thunkCreator)
		},

		setPage(numberPage, pageSize) {
			let thunkCreator = setPageThunkCreator(numberPage, pageSize)
			dispatch(thunkCreator)
		},

		changeFolowStat(id, isFollowed) {
			let thunkCreator = changeFollowingThunkCreator(id, isFollowed)
			dispatch(thunkCreator)
		}

	}
}

const UsersContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export { UsersContainerWrapper }