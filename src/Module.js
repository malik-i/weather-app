import React, {Component} from 'react'
import './App.css'
import Search from './Search';

class Module extends Component {
    render(){
        return(
            <div className="module">
                <div className="image-section">
                    <img className='image' src="https://i.ytimg.com/vi/QoTu3PajVFU/maxresdefault.jpg" />
                </div>
                <div className ="search-section">
                    <Search />
                </div>
            </div>
        )
    }
}

export default Module;