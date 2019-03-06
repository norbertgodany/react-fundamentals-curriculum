const React = require('react');

const Header = require('./Header')
const WeatherForm = require('./WeatherForm')

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h2>Enter a City</h2>
          <WeatherForm />
        </div>
      </React.Fragment>
    )
  }
}

module.exports = App