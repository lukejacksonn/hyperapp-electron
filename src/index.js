const { h, app } = require('hyperapp')

const $title = h('h1', {}, 'hyperapp-electron')
const $subtitle = h('h3', {}, 'All of the Node.js APIs are available in this file.')
const $list = children => h('ul', {}, children)

app({
  state: {},
  view: (s,a) =>
    h('main', {}, [
      $title,
      $subtitle,
      $list([
        h('li', {}, `Node.js ${process.versions.node}`),
        h('li', {}, `Chromium ${process.versions.chrome}`),
        h('li', {}, `Electron ${process.versions.electron}.`),
      ])
    ]),
})
