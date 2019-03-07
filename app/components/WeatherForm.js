const React = require('react')
const { withRouter } = require('react-router')

const { getCityWeather } = require('../utils/api')
const { getForecast } = require('../utils/api')

class WeatherForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityname: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let value = event.target.value

    this.setState(function () {
      return {
        cityname: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    //getCityWeather(this.state.cityname).then(console.log)
    this.props.history.push(`/forecast/${this.state.cityname}`)
  }

  render() {
    return (
      <form
        className="form-weather"
        onSubmit={this.handleSubmit}
      >
        <input
          className="weather-input"
          placeholder="E.g. Barcelona"
          type="text"
          autoComplete="off"
          value={this.state.cityname}
          onChange={this.handleChange}
        >
        </input>
        <button>Get Weather</button>
      </form>
    )
  }
}

module.exports = withRouter(WeatherForm)