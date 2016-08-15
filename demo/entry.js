
import React from 'react'
import ReactDOM from 'react-dom'
import sploot from '../src'

const Sploot = ({
  color,
  position,
  angle,
  ...props
}) => {
  const sx = {
    margin: 16,
    padding: 32,
    backgroundImage: sploot({
      start: color,
      position,
      angle
    })
  }

  return (
    <div {...props} style={sx} />
  )
}

const App = () => {
  return (
    <div>
      <Sploot color='cyan'>
        <h1>Sploot</h1>
      </Sploot>
      <Sploot color='magenta' angle={45}>
        <h2>Magenta 45deg</h2>
      </Sploot>
      <Sploot color='magenta' angle={-45}>
        <h2>Magenta -45deg</h2>
      </Sploot>
      <Sploot color='yellow' angle={90} position='25%'>
        <h2>Yellow 90deg 25%</h2>
      </Sploot>
      <Sploot color='cyan' angle={-90} position='25%'>
        <h2>Cyan -90deg 25%</h2>
      </Sploot>
    </div>
  )
}

ReactDOM.render(<App />, app)

