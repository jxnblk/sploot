
const sploot = ({
  start = 'cyan',
  end = 'white',
  position = '50%',
  angle = 180
} = {}) => {
  return `linear-gradient(${angle}deg, ${start} ${position}, ${end} ${position})`
}

export default sploot

