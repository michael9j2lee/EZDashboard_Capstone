import React  from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';

drilldown(Highcharts);

const options = {
series: [
        {
            name: 'Profit',
            data: [100,200,30,100,30,50,100]
        }
    ]
}

export default function (){
    return ( 
        <HighchartsReact highcharts={Highcharts} options={options} />
    );
}