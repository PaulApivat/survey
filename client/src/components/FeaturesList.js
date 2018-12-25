import React from 'react';

import FeatureView from './FeatureView'

class FeaturesList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                {this.props.features.map(feature => {
                    return(
                        <FeatureView feature={feature} handleUpdateFeature={this.props.handleUpdateFeature}
                            handleDeleteFeature={this.props.handleDeleteFeature}
                        />
                    )
                })}
            </div>
        )
    }
}

export default FeaturesList