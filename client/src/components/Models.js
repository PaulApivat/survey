import React from 'react'
import axios from 'axios';

class Models extends React.Component{
    constructor(){
        super();
        this.state = {
            models: []
        }
    }

    componentDidMount(){
        axios 
        .get(`http://localhost:3000/api/models`)
        .then(response => {
            this.setState({ models: response.data })
        })
        .catch(err => {
            console.log("Fail to GET models from local server", err)
        })
    }

    render(){
        return (
            <div>
                Models here:
                {this.state.models.map(model => {
                    return(
                        <h1> {model.name} </h1>
                    )
                })}
            </div>
        )
    }
}

export default Models