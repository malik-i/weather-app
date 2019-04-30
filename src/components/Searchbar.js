import React, {Component} from 'react'
class Searchbar extends Component {
    render(){
        return (
            <form>
                <input type="text" placeholder="Seearch For a City..." />
                <input type="submit" value="Search"/>
            </form>
        )
    }
}

export default Searchbar