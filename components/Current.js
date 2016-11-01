import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'
var moment = require('moment')

class Current extends React.Component {
    constructor(props) {
        super(props)
        this.state = sharedState()
    }
    componentDidMount() {
        attachSharedState(this)
        if (this.state.search === undefined) {
            this.fetchData('weather/', 'Indianapolis')
            this.fetchData('forecast', 'Indianapolis')
        } else {
            this.fetchData('weather/', this.state.search)
            this.fetchData('forecast', this.state.search)
        }
    }
    componentWillUnmount() {
        detachSharedState(this)
    }
    fetchData(type, city) {
        fetch('http://api.openweathermap.org/data/2.5/' + encodeURIComponent(type) + '?q=' + encodeURIComponent(city) + '&units=imperial&id=524901&APPID=fe7788c97e668d331c7cadca5420f527')
        .then(response => response.json())
        .then(this.updateWeatherData)
    }
    updateWeatherData(response) {
        if (response.city === undefined) {
            sharedState({
                city: response.name,
                temp: Math.round(response.main.temp),
                condition: response.weather[0].description,
                date: moment().format('MMMM Do YYYY, h:mm a'),
                id: response.weather[0].id,
                symbol: 'owf owf-5x owf-' + response.weather[0].id
            })
        } else  {
            sharedState({
                dayOneTemp: Math.round(response.list[1].main.temp),
                dayOneSymbol: 'owf owf-3x owf-' +  response.list[1].weather[0].id,
                dayOneCond: response.list[1].weather[0].description,
                dayOneDate: moment().add(1, 'days').format('dddd'),
                dayTwoTemp: Math.round(response.list[2].main.temp),
                dayTwoSymbol: 'owf owf-3x owf-' + response.list[2].weather[0].id,
                dayTwoCond: response.list[2].weather[0].description,
                dayTwoDate: moment().add(2, 'days').format('dddd'),
                dayThreeTemp: Math.round(response.list[3].main.temp),
                dayThreeSymbol: 'owf owf-3x owf-' + response.list[3].weather[0].id,
                dayThreeCond: response.list[3].weather[0].description,
                dayThreeDate: moment().add(3, 'days').format('dddd'),
                dayFourTemp: Math.round(response.list[4].main.temp),
                dayFourSymbol: 'owf owf-3x owf-' + response.list[4].weather[0].id,
                dayFourCond: response.list[4].weather[0].description,
                dayFourDate: moment().add(4, 'days').format('dddd'),
                dayFiveTemp: Math.round(response.list[5].main.temp),
                dayFiveSymbol: 'owf owf-3x owf-' + response.list[5].weather[0].id,
                dayFiveCond: response.list[5].weather[0].description,
                dayFiveDate: moment().add(5, 'days').format('dddd'),
            })
        }
    }
    render() {
        return <div id="current" style={{backgroundImage:this.state.id < 300?'url(../img/thunderstorm.jpg)':this.state.id < 500?'url(../img/drizzle.jpg)':this.state.id < 600?'url(../img/rain.jpg)':this.state.id < 800?'url(../img/snow.jpg)':this.state.id < 802?'url(../img/sun.jpg)': 'url(../img/clouds.jpg)'}}>
        <div id="nav" className="flex">
            <Link to="/">
                <button type="button" className="btn btn-default button">Now</button>
            </Link>
            <Link to="/forecast">
                <button type="button" className="btn btn-default button">Daily</button>
            </Link>
            <Link to="/settings">
                <button type="button" className="btn btn-default button"><i className="fa fa-cog" aria-hidden="true"></i></button>
            </Link>
        </div>
        <div id="current" className="flex">
            <div id="location" className="flex">
                <h1>{this.state.city}</h1>
                <h5>{this.state.date}</h5>
            </div>
            <div id="temp" className="flex">
                <h1>{this.state.temp}&deg;</h1>
                <i className={this.state.symbol}></i>
                <h3 id="condition">{this.state.condition} </h3>
            </div>
        </div>
        </div>
    }
}

export default Current
