
# sploot

CSS linear-gradient function for creating split backgrounds

[![Build Status](https://travis-ci.org/jxnblk/sploot.svg?branch=master)](https://travis-ci.org/jxnblk/sploot)

![sploot!](http://41.media.tumblr.com/f9f964fda886218103d34901feaced2c/tumblr_neyds4dLov1sg635yo1_1280.jpg)

```sh
npm i sploot
```

```js
import sploot from 'sploot'

const style = {
  backgroundImage: sploot()
}
// 'linear-gradient(180deg, cyan 50%, white 50%)'
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

