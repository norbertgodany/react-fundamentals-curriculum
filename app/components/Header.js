const React = require('react');

const WeatherForm = require('./WeatherForm')

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>Know Your Weather</h1>
          <WeatherForm />
        </div>
      </header>
    )
  }
}

module.exports = Header