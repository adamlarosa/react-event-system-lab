// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    keyUpEvent = () => {
        console.log('Entering password...')
    }

    render () {
        return (
            <input onKeyUp={this.keyUpEvent} type="password"></input>  
        )
    }
}

export default Keypad