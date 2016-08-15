
import test from 'ava'
import sploot from '../src'

let str

test('is a function', t => {
  t.is(typeof sploot, 'function')
})

test('returns a string', t => {
  t.is(typeof sploot(), 'string')
})

test('is a linear gradient', t => {
  str = sploot()
  console.log(str)
  t.regex(str, /^linear\-gradient/)
})

test('has default values', t => {
  t.regex(str, /180deg/)
  t.regex(str, /cyan\s50%/)
  t.regex(str, /white\s50%/)
})

test('accepts options', t => {
  str = sploot({
    start: 'blue',
    end: 'red',
    position: '25%',
    angle: 90
  })
  t.regex(str, /90deg/)
  t.regex(str, /blue\s25%/)
  t.regex(str, /red\s25%/)
})


