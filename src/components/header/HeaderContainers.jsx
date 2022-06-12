import { connect } from 'react-redux'
import { useEffect } from 'react'
import { Header } from './Header'
import { checkAuthThunkCreator } from '../../redux/authReducer'


//! Тут делаем запросы
const HeaderContainer = function (props) {

	useEffect(() => {
		props.checkAuth(props.authData.isAuth, props.authData.id)
	}, [])

	return <Header {...props} />
}



//! Прокидываем методы и данные из редюсера в HeaderContainer
const mapStateToProps = function (state) {
	return { authData: state.authData }
}

const mapDispatchToProps = function (dispatch) {
	return {
		
		checkAuth(isAuth, id) {
			let thunkCreator = checkAuthThunkCreator(isAuth, id)
			dispatch(thunkCreator)
		}
	}
}


const HeaderContainerWrapper = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)


export { HeaderContainerWrapper }