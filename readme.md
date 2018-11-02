# xml-string

Utility to create XML strings. Can be used to write any XML based files such as SVG, HTML or GPX.

## Install

```bash
$ npm install xml-string
```

## Usage

```javascript
const xml = require('xml-string')
```

### .create()

```javascript
const svg = xml.create('svg')
```

### .child()

Append a child element

```javascript
const svg = xml.create('svg')
const g = svg.child('g')
```

### .attr()

Add attributes

```javascript
const svg = xml.create('svg')
const g = svg.child('g')
g.attr({ id: 'group' })
```

### .data()

Add data

```javascript
const svg = xml.create('svg')
const g = svg.child('g')
g.attr({ id: 'group' })
const text = g.child('text')
text.data('Hello world')
```

### .outer()

Returns the XML string

```javascript
const svg = xmlString.create('svg')
const g = svg.child('g')
g.attr({ id: 'group' })
const text = g.child('text')
text.data('Hello world')

console.log(svg.outer())
// returns
// '<svg><g id="group"><text>Hello world</text></g></svg>'
```

## Aliases

- **.child()** > **.c()**
- **.attr()** > **.a()**
- **.data()** > **.d()**

Example:

```javascript
const svg = xml.create('svg')
const g = svg.c('g')
g.a({ id:'group' })
const text = g.c('text')
text.d('Hello world')

console.log(svg.outer())
// returns
// '<svg><g id="group"><text>Hello world</text></g></svg>'
```


