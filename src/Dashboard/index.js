import React from 'react';
// import { render } from 'react-dom'
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official'
import LineChart from './LineChart';
import DrillDownBarGraph from './DrillDownBar';
// import {AppContext} from '../App/AppProvider';
import query1 from './CountsByDay';
import StackedBar from './StackedBar';

 export default function (){
    // query1.loader(1);
    
    return (
        <div>
            <LineChart/>
            <br></br>
            <DrillDownBarGraph/>
            <br></br>
            <StackedBar/>
        </div>
    )
}

