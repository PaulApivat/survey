import React from 'react'
import axios from 'axios';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

class Survey extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {
                battery: 0.7,        //0.7
                design: 0.8,          //0.8
                useful: 0.9,         //0.9
                speed: 0.67,         //0.67
                weight: 0.8          //0.8
                },
            meta: { color: 'blue' 
            }
        }
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("submitted");
        this.setState(({ data }) => ({
            data: { ...data, [name]: parseFloat(value) } //required to update NESTED 'data' object
        }));
    };

    // handleChange = event => {
    //     event.preventDefault();
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const { battery, design, useful, speed, weight } = this.state.data;
    //     axios.post('/', { battery, design, useful, speed, weight })
    //     .then(response => {
    //         this.setState({ data: response.data })
    //     });
    // }



    render(){
    
        const data2 = [this.state]

        // const data2 = [
        //     {
        //         data: {
        //             battery: 0.7,
        //             design: .8,
        //             useful: 0.9,
        //             speed: 0.67,
        //             weight: 0.8
        //             },
        //         meta: { color: 'blue' }
        //     },
        //     {
        //         data: {
        //             battery: 0.6,
        //             design: .85,
        //             useful: 0.5,
        //             speed: 0.6,
        //             weight: 0.7
        //         },
        //         meta: { color: 'red' }
        //     }
        // ];
        
    
        const captions = {
            // columns
            battery: 'Battery',
            design: 'Design',
            useful: 'Usefulness',
            speed: 'Speed',
            weight: 'Weight'
        };

        console.log(this.state)
            return (
                <div>
                    <div>
                        <RadarChart
                            captions={captions}
                            data={data2}
                            // chart size
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

export default Survey

// I connected my form input (change handler) to the STATE - in the data structure - that is required by the Radar chart component
// when i replace the dummy data with '' i get Error: Data set 0 is invalid
// but i know the data structure in state is 'correct'
// and i know I can link whatever is 'displayed' to 'state'
// i just need to 'submit' new data to replace 'dummy' data that is initialized in state ?