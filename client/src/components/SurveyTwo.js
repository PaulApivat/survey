import React from 'react'
import axios from 'axios';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

// no default values
// Utility functions (could use something from Ramda/Lodash)
// const isObject = x => typeof x === "object";
// const mergeRight = (o, p) =>
//   o
//     ? Object.keys(o).reduce(
//         (acc, key) => ({
//           ...acc,
//           [key]: !p[key]
//             ? o[key]
//             : isObject(o[key])
//             ? mergeRight(o[key], p[key])
//             : p[key] || o[key]
//         }),
//         {}
//       )
//     : p;

class SurveyTwo extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {
                battery: 0,
                design: 0,
                useful: 0,
                speed: 0,
                weight: 0
            },
            meta: {color: 'red'
            }
        }
    }


    // state = {
    //     data: {}
    // }

    componentDidMount(){
        axios 
        .get(`http://localhost:3000/api/data`)
        .then(response => {
            this.setState({ data: response.data })
        })
        .catch(err => {
            console.log("Fail to GET Data from local server", err)
        })
    }

    render(){
        //const { battery, design, useful, speed, weight } = this.state.data;

        // This is necessary to have valid fallback data
        // for the RadarChart component
        // const defaultData = {
        //     data: {
        //         battery: 0,
        //         design: 0,
        //         useful: 0,
        //         speed: 0,
        //         weight: 0
        //     },
        //     meta: {
        //         color: "blue"
        //         }
        //     };

        // This will use the values from state where there are any
        // otherwise fall back to defaultData
        //const data = [mergeRight(defaultData, this.state)];

        const data = [this.state]

        const captions = {
            // columns
            battery: 'Battery',
            design: 'Design',
            useful: 'Usefulness',
            speed: 'Speed',
            weight: 'Weight'
        };

        // This will set a default step to increment the number inputs
        const step = "0.05";

        return (
            <div>
                <div>
                    <RadarChart
                        captions={captions}
                        data={data}
                        size={400}
                    />
                </div>

                <div>
                        <form handleSubmit={this.handleSubmit}>  
                                <input
                                    placeholder="Battery"
                                    type="number"
                                    step={step}
                                    name="battery"
                                    value={this.state.data.battery}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Design"
                                    type="number"
                                    step={step}
                                    name="design"
                                    value={this.state.data.design}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Useful"
                                    type="number"
                                    step={step}
                                    name="useful"
                                    value={this.state.data.useful}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Speed"
                                    type="number"
                                    step={step}
                                    name="speed"
                                    value={this.state.data.speed}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Weight"
                                    type="number"
                                    step={step}
                                    name="weight"
                                    value={this.state.data.weight}
                                    onChange={this.handleChange}
                                />
                                <button type="submit">Submit</button>
                        </form>
                </div>

                <div>
                    {this.state.data.battery}
                    {this.state.data.design}
                    {this.state.data.useful}
                    {this.state.data.speed}
                    {this.state.data.weight}
                </div>

            </div>
        )
    }
}

export default SurveyTwo
