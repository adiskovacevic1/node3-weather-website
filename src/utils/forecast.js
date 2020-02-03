const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3554e8ea8fe0e9d29b95219061d50d03/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json:true}, (error, {body}) =>{
        if(error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temp = body.currently.temperature
            const percip = body.currently.precipProbability
            const tempHigh = body.daily.data[0].temperatureHigh
            const tempLow = body.daily.data[0].temperatureLow
            callback(undefined, body.daily.data[0].summary + ' It is currenlty ' + temp + ' degrees out. There is a ' + percip + '% chance of rain. Todays high is ' + tempHigh + ' and todays low is ' + tempLow + '.')
        }
    })
}

module.exports = forecast