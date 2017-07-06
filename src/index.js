const { h, app } = require('hyperapp')
const devtools = require('hyperapp-redux-devtools')
const persist = require('hyperapp-hmr')

const $title = h('h1', {}, 'hyperapp-electron')
const $subtitle = h('h3', {}, 'All of the Node.js APIs are available in this file.')
const $list = children => h('ul', {}, children)
const $item = children => h('li', {}, children)
const $span = children => h('span', {}, children)
const $button = (props, children) => h('button', props, children)

const $main = (s,a) =>
  h('main', {}, [
    $title,
    $subtitle,
    $list([
      $item(`Node.js ${process.versions.node}`),
      $item(`Chromium ${process.versions.chrome}`),
      $item(`Electron ${process.versions.electron}.`),
    ]),
    h('counter-', {}, [
      $button({ onclick: a.inc }, 'INC'),
      $button({ onclick: a.dec }, 'DEC'),
      $span(s.count),
    ])
  ])

app({
  state: {
    count: 0,
  },
  actions: {
    inc: (s,a,d) => ({ count: s.count + 1 }),
    dec: (s,a,d) => ({ count: s.count - 1 }),
  },
  view: (s,a) => $main(s,a),
  mixins: [
    devtools(),
    persist,
  ]
})
