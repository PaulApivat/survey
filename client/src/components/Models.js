import React from 'react'
import axios from 'axios';

import ModelsList from './ModelsList'
import CreateModel from './CreateModel'
import UpdateModel from './UpdateModel'

class Models extends React.Component{
    constructor(){
        super();
        this.state = {
            models: [],
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

    handleAddNewModel = model => {
        axios 
        .post(`http://localhost:3000/api/models`, model)
        .then(response => {
            axios 
            .get(`http://localhost:3000/api/models`)
            .then(response => {
                this.setState({ models: response.data })
            })
            .catch(err => {
                console.log("Fail to GET models from local server", err)
            })
        })
        .catch(err => {
            console.log("Fail to Add a new Model to local server", err)
        })
    }

    handleDeleteModel = id => {
        axios 
        .delete(`http://localhost:3000/api/models/${id}`)
        .then(response => {
            axios 
            .get(`http://localhost:3000/api/models`)
            .then(response => {
                this.setState({ models: response.data })
            })
            .catch(err => {
                console.log("Fail to GET models from local server", err)
            }) 
        })
        .catch(err => {
            console.log("Fail to Delete a Model from local server", err)
        })
    }

    handleUpdateModel = updatedModel => {
        axios 
        .put(`http://localhost:3000/api/models/${updatedModel.id}`, updatedModel)
        .then(response => {
            axios 
            .get(`http://localhost:3000/api/models`)
            .then(response => {
                this.setState({ models: response.data })
            })
            .catch(err => {
                console.log("Fail to GET models from local server", err)
            }) 
        })
        .catch(err => {
            console.log("Fail to Update a Model from local server", err)
        })
    }


    render(){
        return (
            <div>
                <div>
                    List of Models here:
                    <ModelsList models={this.state.models} handleDeleteModel={this.handleDeleteModel}
                        handleUpdateModel={this.handleUpdateModel}
                    />
                </div>
                <div>
                    Create Models Here:
                    <CreateModel handleAddNewModel={this.handleAddNewModel} />
                </div>

              

                {/* <div>
                    Update Models Here:
                    <UpdateModel handleUpdateModel={this.handleUpdateModel} />
                </div> */}
            </div>
        )
    }
}

export default Models