import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './dog.css'

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "",
        }
    }

    componentDidMount = () => {
        console.log("Success");
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            this.setState({
                url: data.message
            })
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.componentDidMount}>Click for another cute image</button>
                <hr />
                <img src={this.state.url} alt='dog'/>
            </div>
        )
    }
}

