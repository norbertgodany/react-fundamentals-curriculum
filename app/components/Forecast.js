const React = require("react");

const ReactRouter = require("react-router-dom");
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class Forecast extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Forecast!
      </div>
    )
  }
}

module.exports = Forecast