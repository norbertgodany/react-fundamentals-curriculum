const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>Know Your Weather</h1>
          <form className="form-weather">
            <input className="weather-input" placeholder="Barcelona"></input>
            <button formMethod="">Get Weather</button>
          </form>
        </div>
      </header>
    )
  }
}

module.exports = Header