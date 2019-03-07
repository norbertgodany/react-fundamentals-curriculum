const React = require('react');

const ReactRouter = require("react-router-dom");
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Header = require('./Header')
const Home = require('./Home')
const Forecast = require('./Forecast')

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast/:cityname" component={Forecast} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

module.exports = App