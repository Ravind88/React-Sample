export function getPostResponseFromApi(apiEndPontName, params, callback) {

    fetch('http://13.71.4.60/don/public/api/' + apiEndPontName, {

        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((response) => response.json()).then((responseJson) => {
        console.log("req url :" + "http://13.71.4.60/don/public/api/" + apiEndPontName)
        console.log("params:" + JSON.stringify(params))
        console.log("response:" + JSON.stringify(responseJson))
        callback(responseJson)
    }).catch((error) => {
        console.log("req url :" + "http://13.71.4.60/don/public/api/" + apiEndPontName)
        console.log("params:" + JSON.stringify(params))
        console.log("error: " + error)
    })


}

export function getResponsefromApi(apiEndPontName, callback) {
    fetch('http://13.71.4.60/don/public/api/' + apiEndPontName, { method: 'GET' }).
        then((response) => response.json()).
        then((responseJson) => {
            console.log("req url :" + "http://13.71.4.60/don/public/api/" + apiEndPontName)
            callback(responseJson)

        }).catch((error) => {
            console.log("req url :" + "http://13.71.4.60/don/public/api/" + apiEndPontName)
            console.log("error: " + error)
        })
}