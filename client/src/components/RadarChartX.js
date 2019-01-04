import React from 'react';

import axios from 'axios';



const chartSize = 450;
const numberOfScales = 4;

const scale = value => (
    <circle 
        key={`scale-${value}`}
        cx={0}                                         //center of circle at x = 0 , y = 0
        cy={0}
        r={(value / numberOfScales * chartSize) / 2}  //radius?
        fill="#FAFAFA"
        stroke="#999"
        strokeWidth="0.2"    //JSX attribute
    />
);

const polarToX = (angle, distance) => Math.cos(angle - Math.PI / 2) * distance * chartSize;
const polarToY = (angle, distance) => Math.sin(angle - Math.PI / 2) * distance * chartSize;

const pathDefinition = points => {
    let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++){
        d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
    }
    return d + 'z';
}

const shape = (columns) => (chartData, i) => {   //callback function
    const data = chartData;
    return(
        <path 
            key={`shape-${i}`}
            d={pathDefinition(
                columns.map(col => {
                    const value = data[col.key];
                    return [
                        polarToX(col.angle, (value) / 2),
                        polarToY(col.angle, (value) / 2)
                    ];
                })
            )}
            stroke={`#edc951`}
            fill={`#edc951`} 
            fillOpacity=".5"   //JSX attribute
        />
    );
};

//The Axis
const points = points => {
    return points
    .map(point => point[0].toFixed(4) + ',' + point[1].toFixed(4))
    .join(' ');
}

const axis = () => (col, i) => (
    <polyline 
        key={`poly-axis-${i}`}
        points={points([
            [0,0],
            [polarToX(col.angle, chartSize / 2), polarToY(col.angle, chartSize / 2)]
        ])}
        stroke="#555"
        strokeWidth=".2"
    />
);

//Captions
const caption = () => col => (
    <text 
        key={`caption-of-${col.key}`}
        x={polarToX(col.angle, (chartSize / 2) * 0.95).toFixed(4)}
        y={polarToY(col.angle, (chartSize / 2) * 0.95).toFixed(4)}
        dy={10 / 2}
        fill="#444"
        fontWeight="400"
        textShadow="1px 1px 0 #fff"
    >
        {col.key}
    </text>
)

// const RadarChartX = props => {
// };

class RadarChartX extends React.Component {
    constructor(){
        super();
        // this.state = {
        //     data: []
        // }
    }

    // componentDidMount(){
    //     axios 
    //     .get(`http://localhost:3000/api/data`)
    //     .then(response => {
    //         this.setState({ data: response.data })
    //     })
    //     .catch(err => {
    //         console.log("Fail to GET Data from local server", err)
    //     })
    // }
    


    render(){

        console.log(this.props.data)

    

        const data = [
            {battery: 0.7, design: 1, useful: 0.9, speed: 0.67, weight: 0.8},
            {battery: 0.6, design: 0.9, useful: 0.8, speed: 0.7, weight: 0.6}
        ];

        



        const groups = [];
        const scales = [];
        for (let i = numberOfScales; i > 0; i--){       //use for-loop to create as many circles as we want
            scales.push(scale(i));                      //pushing 4 circles into empty array scales
        }
        groups.push(<g key={`scales`}>{scales}</g>)     //pushing 4 scales into empty array groups
    
    
        //four quarters of chart -> one full circle
        const middleOfChart = (chartSize / 2).toFixed(4);
    
        const captions = Object.keys(data[0]);
        const columns = captions.map((key, i, all) => {
            return {
                key,
                angle: (Math.PI * 2 * i) / all.length
            };
        });
     
        groups.push(<g key={`group-axes`}>{columns.map(axis())}</g>);
        groups.push(<g key={`group-captions`}>{columns.map(caption())}</g>);
        groups.push(<g key={`groups`}>{data.map(shape(columns))}</g>);


        return(
            <svg 
                version="1" 
                xmlns="http://www.w3.org/2000/svg" 
                width={chartSize} 
                height={chartSize}
                viewBox={`0 0 ${chartSize} ${chartSize}`}    //JSX attribute
            >
                <g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
            </svg>
        );
    }
};

export default RadarChartX;