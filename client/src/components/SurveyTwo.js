import React from 'react'
//import axios from 'axios';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

// no default values
// Utility functions (could use something from Ramda/Lodash)
const isObject = x => typeof x === "object";
const mergeRight = (o, p) =>
  o
    ? Object.keys(o).reduce(
        (acc, key) => ({
          ...acc,
          [key]: !p[key]
            ? o[key]
            : isObject(o[key])
            ? mergeRight(o[key], p[key])
            : p[key] || o[key]
        }),
        {}
      )
    : p;

class SurveyTwo extends React.Component {
    state = {
            data: {}
    }

    render(){
        const { battery, design, useful, speed, weight } = this.state.data;

        // This is necessary to have valid fallback data
        // for the RadarChart component
        const defaultData = {
            data: {
                battery: 0,
                design: 0,
                useful: 0,
                speed: 0,
                weight: 0
            },
            meta: {
                color: "blue"
                }
            };

        // This will use the values from state where there are any
        // otherwise fall back to defaultData
        const data = [mergeRight(defaultData, this.state)];
        const captions = {
            // columns
            battery: 'Battery',
            design: 'Design',
            useful: 'Usefulness',
            speed: 'Speed',
            weight: 'Weight'
        };

        // This will set a default step to increment the number inputs
        const step = "0.02";

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
                                    value={battery}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Design"
                                    type="number"
                                    step={step}
                                    name="design"
                                    value={design}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Useful"
                                    type="number"
                                    step={step}
                                    name="useful"
                                    value={useful}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Speed"
                                    type="number"
                                    step={step}
                                    name="speed"
                                    value={speed}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Weight"
                                    type="number"
                                    step={step}
                                    name="weight"
                                    value={weight}
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
