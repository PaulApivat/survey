import React from 'react'
import axios from 'axios';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

class Survey extends React.Component {
    constructor(){
        super();
        this.state = {
            features: []
        }
    }

    componentDidMount(){
        axios 
        .get(`http://localhost:3000/api/features`)
        .then(response => {
            this.setState({ features: response.data })
        })
        .catch(err => {
            console.log("Fail to GET Features from local server", err)
        })
    }

    render(){
        const data = [
            {
              data: {
                battery: 0.7,
                design: .8,
                useful: 0.9,
                speed: 0.67,
                weight: 0.8
              },
              meta: { color: 'blue' }
            },
            {
              data: {
                battery: 0.6,
                design: .85,
                useful: 0.5,
                speed: 0.6,
                weight: 0.7
              },
              meta: { color: 'red' }
            }
        ];
      
        const captions = {
            // columns
            battery: 'Battery Capacity',
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
                            // chart size
                            size={400}
                        />
                    </div>
                </div>
        )
    }
}

export default Survey


{/* <RadarChart
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
                    battery: `${feature.battery}`,
                    design: `${feature.design}`,
                    useful: `${feature.useful}`,
                    speed: `${feature.speed}`,
                    weight: `${feature.weight}`
                },
                meta: { color: '#58FCEC' }
            },
        ]}
        // chart size
        size={400}
/> */}


// <RadarChart
//         captions={{
//             // columns
//             battery: 'Battery Capacity',
//             design: 'Design',
//             useful: 'Usefulness',
//             speed: 'Speed',
//             weight: 'Weight'
//         }}
//         data={[
//             // data
//             // each chart is it's own object with two keys: data & meta
//             {
//                 data: {
//                     battery: 0.7,
//                     design: .8,
//                     useful: 0.9,
//                     speed: 0.67,
//                     weight: 0.8
//                 },
//                 meta: { color: '#58FCEC' }
//             },
//             {
//                 data: {
//                     battery: 0.3,
//                     design: .4,
//                     useful: 0.5,
//                     speed: 0.9,
//                     weight: 0.1
//                 },
//                 meta: { color: 'red' }
//             },
//         ]}
//         // chart size
//         size={400}
// />