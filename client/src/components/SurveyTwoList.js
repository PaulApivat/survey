import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

class SurveyTwoList extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {
                battery: 0.5,
                design: 0.5,
                useful: 0.5,
                speed: 0.5,
                weight: 0.5
            },
            meta: {color: 'red'
            }
        }
    }

    // componentDidUpdate(props){
    //     this.setState({ data: props.data })
    // }

    render(){

        const captions = {
            // columns
            battery: 'Battery',
            design: 'Design',
            useful: 'Usefulness',
            speed: 'Speed',
            weight: 'Weight'
        };

        const data = [this.state]

      

        return(
            <div>
                <div>
                    {this.props.data.map(data => {
                        return (
                            <div>
                                Battery: {data.battery}
                                Design: {data.design}
                                Usefulness: {data.useful}
                                Speed: {data.speed}
                                Weight: {data.weight}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <RadarChart
                        captions={captions}
                        data={data}
                        size={400}
                    />
                </div>
            </div>
        )
    }
}

export default SurveyTwoList