
# sploot

CSS linear-gradient function for creating split backgrounds

```sh
npm i sploot
```

```js
import sploot from 'sploot'

const style = {
  backgroundImage: sploot()
}
```

```js
// with options
const style = {
  backgroundImage: sploot({
    start: 'tomato',
    end: 'fuchsia',
    position: '25%',
    angle: 90
  })
}
```

MIT License

