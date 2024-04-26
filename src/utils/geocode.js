const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ encodeURIComponent(address) +'&limit=1&access_token=pk.eyJ1IjoidGhlbWFsbXN0YWR0IiwiYSI6ImNsdjQ5NXN4ejA2bWoybnBmdHZlb2RtMmoifQ.O2wnB1cDYB32FRf0DJGegQ'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.features.length === 0) {
            callback('Unable to find location.')
        } else {
            const {longitude, latitude} = body.features[0].properties.coordinates
            const location = body.features[0].properties.full_address

            callback(undefined, { 
                latitude, 
                longitude,
                location
            })
        }
    })
}

module.exports = geocode