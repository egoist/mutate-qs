# mutate-qs [![Build Status](https://travis-ci.org/egoist/mutate-qs.svg?branch=master)](https://travis-ci.org/egoist/mutate-qs)

> mutate queryString in browser location


## Install

```
$ npm install --save mutate-qs
```


## Usage

```js
const mutateQs = require('mutate-qs');

// assuming location.search is `?bar=haha`
mutateQs({foo: 'lily'})
//=> '?bar=haha&foo=lily'

// to remove a param
mutateQs({bar: null})
//=> '?bar='
```


## API

### mutateQs(obj, query)

#### obj

Type: `object`

set the queryString by key/value in `obj`

#### query

Type: `string`
Default: `location.search`

The queryString, default is `location.seach`, anything starts with `?` is valid queryString.

## License

MIT © [EGOIST](https://github.com/egoist)
