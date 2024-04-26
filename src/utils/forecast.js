const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ca9c989fed565ebe7d1edf6531f90b69&query='+ latitude +','+ longitude +'&units=f'
    request({ url, json: true }, (error, {body}) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The current time is ' + body.current.observation_time)
        }
    })
}

module.exports = forecast