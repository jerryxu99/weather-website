const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7a821acfd40fb068106ee58d8408e86f&query=' + encodeURI(latitude) + ',' + encodeURI(longitude) + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' ' + 'degrees out. The chance of precipitation is ' + (body.current.precip * 100.0) + '%.')
        }
    })
}

module.exports = forecast