import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { FriendsContainer } from './friends/FriendsContainer'

const setActive = ({ isActive }) => isActive ? 'act' : 'navbar__link'

export default function Navbar(props) {
	
	
	return (
		<div className='sidebar'>
			<nav className="main__navbar navbar">
				<ul className="navbar__list">
					<li className="navbar__item"><NavLink to="/profile" className={setActive} >Profile</NavLink></li>
					<li className="navbar__item"><NavLink to="/dialogs/*" className={setActive} >Dialogs</NavLink></li>
					<li className="navbar__item"><NavLink to="/contacts" className={setActive} >Contacts</NavLink></li>
					<li className="navbar__item"><NavLink to="/users" className={setActive} >Users</NavLink></li>
				</ul>
			</nav>

			<FriendsContainer />
			
		</div>
		
	)
}