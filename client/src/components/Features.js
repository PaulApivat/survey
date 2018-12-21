import React from 'react'
import axios from 'axios';

class Features extends React.Component{
    constructor(){
        super();
        this.state = {
            features: []
        }
    }

    componentDidMount(){
        axios 
        .get(`http://localhost:3000/api/features`)
        .then(response => {
            this.setState({ features: response.data })
        })
        .catch(err => {
            console.log("Fail to GET Features from local server", err)
        })
    }

    render(){
        return (
            <div>
                Features here:
                {this.state.features.map(feature => {
                    return(
                        <h1> {feature.model_id} </h1>
                    )
                })}
            </div>
        )
    }
}

export default Features