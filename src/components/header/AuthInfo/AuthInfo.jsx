import classes from './AuthInfo.module.css'
import user from '../../../assets/img/user.jpg'


const AuthInfo = function (props) {
	if (props.authData.isFetching) return

	else if (props.authData.isAuth && !props.authData.isFetching) return (
		<>
			<div className={classes.avatarWrapper}>
				<img src={props.authData.avatar ? props.authData.avatar : user} className={classes.avatarHeader} />
			</div>
			<span className={classes.login}>{props.authData.login}</span>
		</>
	)

	else return <span className={classes.noAut}>Вы не авторизированы(</span>

}

export { AuthInfo }