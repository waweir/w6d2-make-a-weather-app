import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Current from '../components/Current'
import Forecast from '../components/Forecast'
import Settings from '../components/Settings'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="" component={Current} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/settings" component={Settings} />
    </Router>
    , document.getElementById('weather')
)
