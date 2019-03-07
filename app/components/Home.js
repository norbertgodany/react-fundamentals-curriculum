const React = require('react')

const WeatherForm = require('./WeatherForm')

function Home() {
  return (
    <div className="home">
      <h2>Enter a City</h2>
      <WeatherForm />
    </div>
  )
}

module.exports = Home