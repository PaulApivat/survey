import React from 'react';

import { Link } from 'react-router-dom';

class ModelView extends React.Component {
    constructor(){
        super();
    }

    handleDelete = event => {
        event.preventDefault();
        this.props.handleDeleteModel(this.props.model.id)
    }

    render(){
        return (
            <div>
                <h1> {this.props.model.name} </h1>
                <p> {this.props.model.id}</p>
                <div onClick={this.handleDelete}><Link to="/models"> Delete </Link> </div>
            </div>
        )
    }
}

export default ModelView