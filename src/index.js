const { app } = require('hyperapp')
const { main, h1, div, button } = require('@hyperapp/html')

const devtools = require('hyperapp-redux-devtools')

const state = {
  count: 0,
}

const actions = {
  reset: () => ({ count: 0 }),
  sum: data => ({ count }) => ({ count: count + data }),
}

const view = (state, actions) =>
  main([
    h1(state.count),
    div([
      button({ onclick: e => actions.sum(-1) }, 'Sub'),
      button({ onclick: e => actions.reset() }, 'Reset'),
      button({ onclick: e => actions.sum(1) }, 'Add'),
    ]),
  ])

devtools(app)(state, actions, view, document.body)
