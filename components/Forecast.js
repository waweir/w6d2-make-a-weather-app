import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'
var moment = require('moment')

class Forecast extends React.Component {
    constructor(props) {
        super(props)
        this.state = sharedState()
    }
    componentDidMount() {
        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
    }
    render() {
        return <div id="forecast">
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
            <h3>Five Day Forecast</h3>
            <h4>{this.state.city}</h4>
            <h5>{this.state.date}</h5>
            <table className="table">
                <tbody>
                    <tr>
                        <td>{this.state.dayOneTemp}&deg;</td>
                        <td><i className={this.state.dayOneSymbol}></i></td>
                        <td>{this.state.dayOneCond}</td>
                        <td>{this.state.dayOneDate}</td>
                    </tr>
                    <tr>
                        <td>{this.state.dayTwoTemp}&deg;</td>
                        <td><i className={this.state.dayTwoSymbol}></i></td>
                        <td>{this.state.dayTwoCond}</td>
                        <td>{this.state.dayTwoDate}</td>
                    </tr>
                    <tr>
                        <td>{this.state.dayThreeTemp}&deg;</td>
                        <td><i className={this.state.dayThreeSymbol}></i></td>
                        <td>{this.state.dayThreeCond}</td>
                        <td>{this.state.dayThreeDate}</td>
                    </tr>
                    <tr>
                        <td>{this.state.dayFourTemp}&deg;</td>
                        <td><i className={this.state.dayFourSymbol}></i></td>
                        <td>{this.state.dayFourCond}</td>
                        <td>{this.state.dayFourDate}</td>
                    </tr>
                    <tr>
                        <td>{this.state.dayFiveTemp}&deg;</td>
                        <td><i className={this.state.dayFiveSymbol}></i></td>
                        <td>{this.state.dayFiveCond}</td>
                        <td>{this.state.dayFiveDate}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Forecast
