import * as axios from 'axios'


// axios можно настроить с помощью create, чтобы не дублировать каждый раз объект с параметрами и базовый URL
const instance = axios.create({
	withCredentials: true,
	headers: { "API-KEY": "ae76e4af-a97a-40e5-9331-26f02d2b6dce" },
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})



const usersFetchingAPI = {
	// подписка-отписка
	onUnfollowAPI(id) {
		return instance.post(`follow/${id}`)
			.then(responce => { if (responce.data.resultCode == 0) return responce })
	},

	onFollowAPI(id) {
		return instance.delete(`follow/${id}`)
			.then(responce => { if (responce.data.resultCode == 0) return responce })
	},


	// получение пользователей при загрузке компоненты users и при пагинации
	getUsers(currentPage, pageSize) {
		
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(responce => {
				return responce.data
			})
			
	}
}

const authFetchingAPI = {

	onCheckAuth() {
		return instance.get('auth/me')
						.then(responce => responce.data)
	},

	getAvatar(id) {
		return instance.get(`profile/${id}`)
			.then(responce => responce.data)
	}
}

const profileFetchingAPI = {

	onShowProfile(userId) {
		return instance.get(`profile/${userId}`)
	} 
	


}



export { usersFetchingAPI }
export { authFetchingAPI }
export { profileFetchingAPI }