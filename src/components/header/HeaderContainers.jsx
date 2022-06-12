import { connect } from 'react-redux'
import { setAuthDataAC, setAvatarAC, isFetchingAC } from '../../redux/authReducer'
import { useEffect } from 'react'
import axios from 'axios'
import { Header } from './Header'
import { authFetchingAPI } from '../../DAL/fetchingAPI'


//! Тут делаем запросы
const HeaderContainer = function (props) {

	useEffect(() => {
		props.isFetching(true)
		authFetchingAPI.onCheckAuth()
			.then(responce => { if (responce.resultCode === 0 ) props.setAuth(responce.data) })
			.then(() => {
				if (props.authData.isAuth) {
					authFetchingAPI.getAvatar(props.authData.id)
				 	.then(responce => { if (props.authData.isAuth) props.setAvatar(responce.data.photos.small) })
				}
			}
		)
			.then(props.isFetching(false))
			.catch(err=>console.log(err.message))	
	}, [])

	return <Header {...props} />
}



//! Прокидываем методы и данные из редюсера в HeaderContainer
const mapStateToProps = function (state) {
	return { authData: state.authData }
}

const mapDispatchToProps = function (dispatch) {
	return {
		setAuth(authData) {
			let action = setAuthDataAC(authData)
			dispatch(action)
		},

		setAvatar(avatarSrc) {
			let action = setAvatarAC(avatarSrc)
			dispatch(action)
		},

		isFetching(isFetching) {
			let action = isFetchingAC(isFetching)
			dispatch(action)
		}
	}
}


const HeaderContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)


export { HeaderContainerWrapper }