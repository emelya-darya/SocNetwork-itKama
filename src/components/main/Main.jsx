import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dialogs from "./dialogs/Dialogs";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import classes from "./Main.module.css"


export default function Main() {
	return (
		<main className={classes.main}>
			<div className={classes.main__container}>
				<Navbar />
				
				
				<Routes>
					<Route path="/dialogs" element={<Dialogs />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
				{/* <Profile  />

				<Dialogs /> */}
				
			</div>
		</main>
	)
}