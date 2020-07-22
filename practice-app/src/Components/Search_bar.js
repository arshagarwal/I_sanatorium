import React, { Component } from 'react'


export default class Search_bar extends Component {
    render() {
        return (
            <React.Fragment>
             <div >
                <form style={style}>
                <br />
                <input type='text' placeholder= 'Search for a user' style={{flex:5, padding: '10px'}}/>
                <input type='submit'
                value='Search'
                style={{flex:1}}
                />
                </form>
            </div>
            </React.Fragment>
            
        )
    }
}
 const style= {display : 'flex', flexDirection: 'row'};
//export default SearchBar;