import React from 'react'
import axios from 'axios';

import FeaturesList from './FeaturesList'
import CreateFeature from './CreateFeature'

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

    handleAddNewFeature = feature => {
        axios 
        .post(`http://localhost:3000/api/features`, feature)
        .then(response => {
            axios 
            .get(`http://localhost:3000/api/features`)
            .then(response => {
                this.setState({ features: response.data })
            })
            .catch(err => {
                console.log("Fail to GET Features from local server", err)
            })
        })
        .catch(err => {
            console.log("Fail to Add new Features, for a model, to local server", err)
        })
    }



    render(){
        return (
            <div>
                <div>
                    Features here:
                    <FeaturesList features={this.state.features} />
                </div>
                <div>
                    Create Features Here:
                    <CreateFeature handleAddNewFeature={this.handleAddNewFeature}/>
                </div>
            </div>
        )
    }
}

export default Features