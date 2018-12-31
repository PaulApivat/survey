import React from 'react'
import axios from 'axios';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

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
            meta: { color: 'red'
                }
        }
    }

    render(){
        const data = [this.state]

        const captions = {
            // columns
            battery: 'Battery',
            design: 'Design',
            useful: 'Usefulness',
            speed: 'Speed',
            weight: 'Weight'
        };

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
                                    step="0.05"
                                    name="battery"
                                    value={this.state.data.battery}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Design"
                                    type="number"
                                    step="0.05"
                                    name="design"
                                    value={this.state.data.design}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Useful"
                                    type="number"
                                    step="0.05"
                                    name="useful"
                                    value={this.state.data.useful}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Speed"
                                    type="number"
                                    step="0.05"
                                    name="speed"
                                    value={this.state.data.speed}
                                    onChange={this.handleChange}
                                />
                                <input
                                    placeholder="Weight"
                                    type="number"
                                    step="0.05"
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