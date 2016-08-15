
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
    margin: 32,
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
        <p>CSS linear-gradient function for creating split backgrounds</p>
        <a href='https://github.com/jxnblk/sploot'>GitHub</a>
        {' '}
        <a href='https://npmjs.com/package/sploot'>npm</a>
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
      <Sploot color='yellow' angle={90} position='75%'>
        <a href='http://jxnblk.com'>Made by Jxnblk</a>
      </Sploot>
    </div>
  )
}

ReactDOM.render(<App />, app)

