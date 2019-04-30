import React, {Component} from 'react'

class Info extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        let cachedLat = localStorage.getItem('latitude')
        let cachedLon = localStorage.getItem('longitude')

        cachedLat ? // if the cached Latitude exists, then
        this.setCoordsFromLocalStorage(cachedLat, cachedLon) : // set the coordinates from the local storage as the parameters being passed
        this.getCoords() // if the cached Latitude does not exist, then get the coordinates
    }

    getCoords(){
        // in order to get the user's coordinates, we used the Geolocation API
        if(window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{ // using a callback function, using position as a parameter to set longitudes and latitudes
                localStorage.setItem('latitude', position.coords.latitude) // once we have the longitude and lat, 
                localStorage.setItem('longitude', position.coords.longitude) // set these items in teh localStorage object, so it can be referenced the next time the app is used
                this.callWeatherApi(position.coords.latitude, position.coords.longitude,"geo") // we then pass those coordinates
                .then(res => this.setState({response: res.express}))
                .catch(err => console.log(err))
            }, (error) => {
                this.setState({
                    error: error.message,
                })
            } 
            )
        }
    }

    callWeatherApi = async (latitude, longitude, location) => {
        let response = await fetch('/api/weather?latitude=' + latitude + '&longitude=' + longitude + '&location=' + location)
        let body = await response.json

        if(body.cod == 404){
            throw Error(body.message)
        } else 





        []
    }
    render(){
        return(
        <div>
            <div>
                <h3>London</h3>
            </div>
            <div>
                <h1>80°</h1>
            </div>
            <div>
                <p>Breif decscripton of Weather</p>
            </div>
        </div>
    )
    }
}

export default Info