import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount() {
        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
    }
    search() {
        var searchInput = document.getElementById('searchInput')
        sharedState({
            search: searchInput.value
        })
    }
    render() {
        return <div id="settings">
            <div id="nav" className="flex">
                <Link to="/">
                    <button type="button" className="button btn btn-default">Now</button>
                </Link>
                <Link to="/forecast">
                    <button type="button" className="button btn btn-default">Daily</button>
                </Link>
                <Link to="/settings">
                    <button type="button" className="button btn btn-default"><i className="fa fa-cog" aria-hidden="true"></i></button>
                </Link>
            </div>
            <div>
            <h1>Change Location</h1>
            <h4>{this.state.city}</h4>
            <h5>{this.state.date}</h5>
            <input id="searchInput" type="text" className="form-control" placeholder="City Name"/>
            <div className="text-center">
            <Link to="/">
            <button id="searchButton" type="button" className="btn btn-default" onClick={this.search}>Search</button>
            </Link>
            </div>
            </div>
        </div>
    }
}

export default Settings
