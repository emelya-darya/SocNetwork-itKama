import logo from '../../assets/img/logo.png'
import { AuthInfo } from './AuthInfo/AuthInfo'
import classes from './Header.module.css'


const Header = function (props) {
	return (
		<header className={`${classes.App__header} ${classes.header}`}>
			<div className={classes.header__container}>
				<a href="#fd" className={classes.header__logo}>
					<img src={logo} alt="logo" />
				</a>

				<div className={classes.authInfo}>

					<AuthInfo {...props} />

				</div>
			</div>
		</header>
	)
}

export {Header}