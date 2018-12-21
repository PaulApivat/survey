import React from 'react'

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

class About extends React.Component {

   

    render(){

        // EXAMPLE of data array; captions object (size number)
        // no need in render
        // const data = [
        //     {
        //         data: {
        //         battery: 0.7,
        //         design: .8,
        //         useful: 0.9,
        //         speed: 0.67,
        //         weight: 0.8
        //         },
        //         meta: { color: 'blue' }
        //     },
        //     {
        //         data: {
        //         battery: 0.6,
        //         design: .85,
        //         useful: 0.5,
        //         speed: 0.6,
        //         weight: 0.7
        //         },
        //         meta: { color: 'red' }
        //     }
        //     ];
        
        //     const captions = {
        //     // columns
        //     battery: 'Battery Capacity',
        //     design: 'Design',
        //     useful: 'Usefulness',
        //     speed: 'Speed',
        //     weight: 'Weight'
        // };


        return (
            <div>
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
                                battery: 0.7,
                                design: .8,
                                useful: 0.9,
                                speed: 0.67,
                                weight: 0.8
                            },
                            meta: { color: '#58FCEC' }
                        },
                        {
                            data: {
                                battery: 0.3,
                                design: .4,
                                useful: 0.5,
                                speed: 0.9,
                                weight: 0.1
                            },
                            meta: { color: 'red' }
                        },
                    ]}
                    // chart size
                    size={800}
                />
            </div>
        )
    } 
}

export default About