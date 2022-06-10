import './Header.module.css'
import classes from './Header.module.css'

function Header() {
	return (
		<header className={`${classes.App__header} ${classes.header}`}>
			<div className={classes.header__container}>
				<a href="#fd" className={classes.header__logo}>
					<img src="https://flyclipart.com/thumb2/png-logo-design-transparent-logo-design-images-489321.png" alt="logo" />
				</a>
			</div>
		</header>
	)
}

export default Header