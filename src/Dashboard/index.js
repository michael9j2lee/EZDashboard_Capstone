import React from 'react';
// import { render } from 'react-dom'
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official'
import LineChart from './LineChart';
import DrillDownBarGraph from './DrillDownBar';
// import {AppContext} from '../App/AppProvider';
import query1 from './CountsByDay';


export default function (){
    query1.loader;
    return (
        <div>
            <LineChart/>
            <br></br>
            <DrillDownBarGraph/>
        </div>
    )
}
