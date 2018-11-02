import * as test from 'tape'
import xml from '../index'

test('create H1 outer', t => {
  const res = xml
    .create('h1')
    .data('Hello')
    .outer()
  t.same(res, '<h1>Hello</h1>')
  t.end()
})

test('create H1 inner', t => {
  const res = xml
    .create('h1')
    .data('Hello')
    .inner()
  t.same(res, 'Hello')
  t.end()
})

test('create SVG outer', t => {
  const svg = xml
    .create('svg')
    .attr({ width: 100, height: 100 })
  const circle = svg
    .child('circle')
    .attr({
      cx: 50,
      cy: 50,
      r: 10,
      fill: 'red'
    })
  const rect = svg
    .child('rect')
    .attr({
      x: 10,
      y: 10,
      width: 20,
      height: 20,
      fill: 'blue'
    })
  const expected = [
    '<svg width="100" height="100">',
    '<circle cx="50" cy="50" r="10" fill="red"></circle>',
    '<rect x="10" y="10" width="20" height="20" fill="blue"></rect>',
    '</svg>',
  ].join('')
  t.same(svg.outer(), expected)
  t.end()
})