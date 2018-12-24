import React from 'react';

import { Link } from 'react-router-dom'

// import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css'

class FeatureView extends React.Component {
    constructor(){
        super();
    }

    handleDelete = event => {
        event.preventDefault();
        this.props.handleDeleteFeature(this.props.feature.id)
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
                <div onClick={this.handleDelete}> <Link to="/features"> Delete </Link> </div>
            </div> 
        )
    }
}

export default FeatureView


{/* <div>
                    <RadarChart
                        captions={{
                            // columns
                            battery: 'Battery Capacity',
                            design: 'Design',
                            useful: 'Usefulness',
                            speed: 'Speed',
                            weight: 'Weight'
                        }}
                        data={[
                            // data
                            // each chart is it's own object with two keys: data & meta
                            {
                                data: {
                                    battery: `${this.props.feature.battery}`,
                                    design: `${this.props.feature.design}`,
                                    useful: `${this.props.feature.useful}`,
                                    speed: `${this.props.feature.speed}`,
                                    weight: `${this.props.feature.weight}`
                                },
                                meta: { color: '#58FCEC' }
                            },
                        ]}
                        // chart size
                        size={400}
                    />
</div> */}






