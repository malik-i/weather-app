import React, {Component} from 'react'

class Info extends Component {
    constructor(){
        super()
    }
    // componentDidMount(){
    //     let cachedLat = localStorage.getItem('latitude')
    //     let cachedLon = localStorage.getItem('longitude')

    //     cachedLat ? // if the cached Latitude exists, then
    //     this.setCoordsFromLocalStorage(cachedLat, cachedLon) : // set the coordinates from the local storage as the parameters being passed
    //     this.getCoords() // if the cached Latitude does not exist, then get the coordinates
    // }

    // getCoords = () =>{
    //     // in order to get the user's coordinates, we used the Geolocation API
    //     if(window.navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position)=>{ // using a callback function, using position as a parameter to set longitudes and latitudes
    //             localStorage.setItem('latitude', position.coords.latitude) // once we have the longitude and lat, 
    //             localStorage.setItem('longitude', position.coords.longitude) // set these items in teh localStorage object, so it can be referenced the next time the app is used
    //             this.callWeatherApi(position.coords.latitude, position.coords.longitude,"geo") // we then pass those coordinates
    //             .then(res => this.setState({response: res.express}))
    //             .catch(err => console.log(err))
    //         }, (error) => {
    //             this.setState({
    //                 error: error.message,
    //             })
    //         } 
    //         )
    //     }
    // }

    // callWeatherApi = async (latitude, longitude, location) => {
    //     let response = await fetch('/api/weather?latitude=' + latitude + '&longitude=' + longitude + '&location=' + location) // semding those arguments to server file
    //     let body = await response.json

    //     if(body.cod == 404){ // checking to see if the body comes bcak with a 404 and throw an Error
    //         throw Error(body.message)
    //     } else {
    //         this.callUnsplashApi(body.name) // if a 404 is not returned than find an image from that city, using body.name to access the city name
    //         this.setState({
    //             errorText: "",
    //             data: body,
    //             loading: false
    //         })
    //         return body
    //     }
    // }
    printOutCoor = () => {
        // console.log("this work");
        navigator.geolocation.getCurrentPosition((pos)=> {
            console.log(">>>" + pos.coords.latitude)
        })
    }
    render(){
        return(
        <div>
            <div>
                <h3>London</h3>
                {this.printOutCoor()}
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