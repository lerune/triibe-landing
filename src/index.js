/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from 'routes/about'
import Landing from 'routes/landing'
import Register from 'routes/register'
import Contact from 'routes/contact'

import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/about/" component={About} />
      <Route path="/register/" component={Register} />
      <Route path="/contact/" component={Contact} />
    </Router>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
