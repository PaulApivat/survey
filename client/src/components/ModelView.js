import React from 'react';

import { Link } from 'react-router-dom';

import UpdateModel from './UpdateModel'

class ModelView extends React.Component {
    constructor(){
        super();
    }

    handleDelete = event => {
        event.preventDefault();
        this.props.handleDeleteModel(this.props.model.id)
    }

    // handleUpdate = event => {
    //     event.preventDefault();
    //     this.props.handleUpdateModel(this.props.model.id)
    // }

    render(){
        return (
            <div>
                <h1> {this.props.model.name} </h1>
                <p> {this.props.model.id}</p>
                <div onClick={this.handleDelete}><Link to="/models"> Delete </Link> </div>
                <UpdateModel handleUpdateModel={this.props.handleUpdateModel} model={this.props.model} />
                {/* <div><Link to={`/models/${this.props.model.id}`}> Update </Link></div> */}
            </div>
        )
    }
}

export default ModelView