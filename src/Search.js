import React, {Component} from 'react'

class Search extends Component{
    render(){
        return(
            <form>
                <input type='text' name='City' placeholder='Enter a City...' />
                <input type='text' name='Country' placeholder='Enter a Country...' />
                <input type='submit' name='submit' value="Search" />
            </form>
        )
    }
}
export default Search