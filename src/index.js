import './index.css'
import reportWebVitals from './reportWebVitals'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM  from 'react-dom/client'
import App from './App.js'
import { store } from './redux/reduxStore'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

// const rerenderThreeDOM = function (store) {
	
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
// }

// rerenderThreeDOM(store)

// store.subscribe(() => {
// 	rerenderThreeDOM(store)
// })

reportWebVitals()



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



