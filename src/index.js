const { h, app } = require('hyperapp')
const devtools = require('hyperapp-redux-devtools')
const persist = require('hyperapp-hmr')

const $title = c => h('h1', {}, c)
const $subtitle = c => h('h3', {}, c)
const $list = c => h('ul', {}, c)
const $item = c => h('li', {}, c)
const $span = c => h('span', {}, c)
const $counter = c => h('counter-', {}, c)
const $button = (p, c) => h('button', p, c)

app({
  state: {
    count: 0,
  },
  actions: {
    inc: (s,a,d) => ({ count: s.count + 1 }),
    dec: (s,a,d) => ({ count: s.count - 1 }),
  },
  view: (s,a) =>
    h('main', {}, [
      $title('hyperapp-electron'),
      $subtitle('All of the Node.js APIs are available in this file.'),
      $list([
        $item(`Node.js ${process.versions.node}`),
        $item(`Chromium ${process.versions.chrome}`),
        $item(`Electron ${process.versions.electron}.`),
      ]),
      $counter([
        $button({ onclick: a.inc }, 'INC'),
        $button({ onclick: a.dec }, 'DEC'),
        $span(s.count),
      ])
    ]),
  mixins: [
    devtools(),
    persist,
  ]
})
