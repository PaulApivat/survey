import React from 'react';

import ModelView from './ModelView'

class ModelsList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                {this.props.models.map(model => {
                    return(
                        <ModelView model={model} handleDeleteModel={this.props.handleDeleteModel}/>
                    )
                })}
            </div>
        )
    }
}

export default ModelsList

