import './App.css';
import { Routes, Route } from "react-router-dom";
import shortid from 'shortid';
import Header from './components/header/Header';
import Navbar from './components/main/navbar/Navbar'
import { DialogsContainer } from './components/main/dialogs/DialogsContainer';
import { ProfileContainerWrapper } from './components/main/profile/ProfileContainer'
import Contacts from './components/main/contacts/Contacts'
import { UsersContainerWrapper } from './components/main/users/UsersContainer';



function App(props) {
	
	
	return (
		<div className="App wrapper">

			<Header />

			<main className="main">
				<div className='main__container'>
					<Navbar  />

					<Routes>
						<Route key={shortid.generate()} path="/profile/*" element={<ProfileContainerWrapper />} />
						<Route key={shortid.generate()} path="/dialogs/*" element={<DialogsContainer />} />
						<Route key={shortid.generate()} path="/contacts" element={<Contacts />} />
						<Route key={shortid.generate()} path="/users" element={<UsersContainerWrapper />} />
						
					</Routes>


				</div>
			</main>



		</div>
	);
};



export default App;
