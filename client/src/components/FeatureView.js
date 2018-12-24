import React from 'react';

class FeatureView extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                    <h1> ID: {this.props.feature.id} </h1>
                    <h2> Model ID: {this.props.feature.model_id} </h2>
                    <p> Battery: {this.props.feature.battery} </p>
                    <p> Design: {this.props.feature.design} </p>
                    <p> Useful: {this.props.feature.useful} </p>
                    <p> Speed: {this.props.feature.speed} </p>
                    <p> Weight: {this.props.feature.weight} </p>
            </div>
        )
    }
}

export default FeatureView