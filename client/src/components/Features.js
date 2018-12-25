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

    handleDeleteFeature = id => {
        axios 
        .delete(`http://localhost:3000/api/features/${id}`)
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
            console.log("Fail to Delete Features, for a model, from local server", err)
        })
    }

    handleUpdateFeature = updatedFeature => {
        axios 
        .put(`http://localhost:3000/api/features/${updatedFeature.id}`, updatedFeature)
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
            console.log("Fail to Update the Features, for a model, from local server", err)
        })
    }


    render(){
        return (
            <div>
                <div>
                    Features here:
                    <FeaturesList features={this.state.features} handleUpdateFeature={this.handleUpdateFeature}
                        handleDeleteFeature={this.handleDeleteFeature}
                    />
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