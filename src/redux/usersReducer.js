const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_DATA_LOADING = 'IS_DATA_LOADING'
const IN_PROGRESS_TOGGLE_FOLLOW_UNFOLLOW = 'IN_PROGRESS_TOGGLE_FOLLOW_UNFOLLOW'


const initialState = {
	usersData: [
		// 	{ id: 1, isFollowed: true, name: 'Darya', status: 'I wanna sleep', location: { country: 'Russia', town: 'Ufa' } },
		// 	{ id: 2, isFollowed: false, name: 'Lena', status: "I don't want to sleep", location: { country: 'USA', town: 'New York' } },
		// 	{ id: 3, isFollowed: false, name: 'Pete', status: 'I wanna sleep', location: { country: 'France', town: 'Paris' } },
		// 	{ id: 4, isFollowed: true, name: 'Jack', status: 'I wanna work', location: { country: 'Ukraine', town: 'Kiev' } },
		// 	{ id: 5, isFollowed: true, name: 'Steve', status: 'Im ok', location: { country: 'Italy', town: 'Madrid' } },
	],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,
}

const usersReducer = function (state = initialState, action) {

	let stateCopy

	switch (action.type) {

		case (SET_USERS):
			stateCopy = {
				...state,
				usersData: [...action.users.map(user => {
					user.fetchingFollowingProgress = false
					return user
				})]
			}
			return stateCopy

		case (TOGGLE_FOLLOW_UNFOLLOW):
			stateCopy = {
				...state,
				usersData: [...state.usersData.map(us => {

					if (action.userId == us.id) {
						us.followed = !us.followed
					}
					return us
				})],
			}
			return stateCopy
		
		case (IN_PROGRESS_TOGGLE_FOLLOW_UNFOLLOW):
			stateCopy = {
				...state,
				...state.usersData.map(user => {
					if (action.userId == user.id) user.fetchingFollowingProgress = action.isInProgress
					return user
				})
			}
			return stateCopy

		case (CHANGE_PAGE):
			stateCopy = { ...state, currentPage: action.currentPage }
			return stateCopy

		case (SET_TOTAL_USERS_COUNT):
			stateCopy = { ...state, totalUsersCount: action.totalUsersCount }
			return stateCopy

		case (IS_DATA_LOADING):
			stateCopy = { ...state, isLoading: action.isLoading }
			return stateCopy

		default: return state
	}
}

const followToggleAC = function (userId) {
	return { type: TOGGLE_FOLLOW_UNFOLLOW, userId: userId }
}

const setUsersAC = function (usersArr) {
	return { type: SET_USERS, users: usersArr }
}

const changePageAC = function (currentPage) {
	return { type: CHANGE_PAGE, currentPage: currentPage }
}

const setTotalUsersCountAC = function (totalUsersCount) {
	return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount }
}

const isDataLoadingAC = function (isLoading) {
	return { type: IS_DATA_LOADING, isLoading: isLoading }
}

const inProgressToggleFollowAC = function (userId, isInProgress) {
	return { type: IN_PROGRESS_TOGGLE_FOLLOW_UNFOLLOW, userId: userId, isInProgress: isInProgress }
}

// const getUsersThunkCreator = function () {
	
// 	dispatch(isDataLoadingAC(true))
		

// 		usersFetchingAPI.getUsers(props.currentPage, props.pageSize)
// 			.then(responce => {
// 				props.setTotalUsersCount(responce.totalCount)
// 				props.setUsers(responce.items)
// 			})
// 			.then(props.isLoadingSpinnerImgShow(false))
	
// }






export { usersReducer }
export { followToggleAC }
export { setUsersAC }
export { changePageAC }
export { setTotalUsersCountAC }
export { isDataLoadingAC }
export { inProgressToggleFollowAC }