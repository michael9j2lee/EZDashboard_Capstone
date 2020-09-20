import React from 'react';
// import { render } from 'react-dom'
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official'
import LineChart from './LineChart';
import BarGraph from './BarGraph';
// import {AppContext} from '../App/AppProvider';


export default function (){
    return (
        <div>
            <LineChart/>
            <br></br>
            <BarGraph/>
        </div>
    )
}
