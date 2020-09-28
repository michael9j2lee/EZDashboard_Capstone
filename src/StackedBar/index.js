import React  from 'react';
import HighchartsReact from 'highcharts-react-official';
import getData from './getData';
import Highcharts from 'highcharts';
import {AppContext} from "../App/AppProvider";



export default function getResults(){
    return (
    <AppContext.Consumer>
        {({dataResults})  => 
        <div>
            {
            <HighchartsReact highcharts={Highcharts} options={getData(dataResults)} />
            }
        </div>}
        
    </AppContext.Consumer>
    )
}
