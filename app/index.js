const React = require("react")
const ReactDOM = require('react-dom')
require("./index.css")
const App = require('./components/App')

const ReactRouter = require("react-router-dom");
const Router = ReactRouter.BrowserRouter;

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
)