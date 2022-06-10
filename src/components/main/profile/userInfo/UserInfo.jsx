import classes from './UserInfo.module.css'
import user from '../../../../assets/img/user.jpg'


const UserInfo = function (props) {

	return (
		<div className={`${classes.main__useriInfo} ${classes.useriInfo}`}>
			
			<div className={classes.userInfo__avatar}>
				<img src={props.profile.photos.large ? props.profile.photos.large : user} alt="avatar" />
			</div>

			<div className={classes.useriInfo__text}>
				<div className={classes.description}>
					<p className={classes.name}>{props.profile.fullName}</p>
					<p className={classes.workSearch}>Ищу работу: <span className={props.profile.lookingForAJob ? classes.yes : classes.no}> {props.profile.lookingForAJob?'Да':'Нет' } </span></p>
					<p className={classes.workSerchDescription}>{props.profile.lookingForAJobDescription }</p>
				</div>
				<div className={classes.contacts}>
					<p className={classes.contactsTitle}>Контакты</p>
					<p className={classes.contact}>Основной контакт: <span>{props.profile.contacts.mainLink}</span></p>
					<p className={classes.contact}>Facebook: <span>{props.profile.contacts.facebook}</span></p>
					<p className={classes.contact}>Website: <span>{props.profile.contacts.website}</span></p>
					<p className={classes.contact}>VK: <span>{props.profile.contacts.vk}</span></p>
					<p className={classes.contact}>Twitter: <span>{props.profile.contacts.twitter}</span></p>
					<p className={classes.contact}>Instagram: <span>{props.profile.contacts.instagram}</span></p>
					<p className={classes.contact}>Youtube: <span>{props.profile.contacts.youtube}</span></p>
					<p className={classes.contact}>Github: <span>{props.profile.contacts.github}</span></p>

				</div>
			</div>
			
		</div>
	)
}

export {UserInfo}