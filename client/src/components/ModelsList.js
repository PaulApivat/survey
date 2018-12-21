import React from 'react';

class ModelsList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                {this.props.models.map(model => {
                    return(
                        <h1> {model.name} </h1>
                    )
                })}
            </div>
        )
    }
}

export default ModelsList

