const React = require('react');

const Header = require('./Header')

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h2>Enter a City</h2>
          <form className="form-weather">
            <input className="weather-input" placeholder="Barcelona"></input>
            <button formMethod="">Get Weather</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

module.exports = App