import React  from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';

drilldown(Highcharts);
let options =  {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Server Usage by Percentage'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'US-West', y: 61.41 },
            { name: 'US-East', y: 11.84 },
            { name: 'EU-West', y: 10.85 },
            { name: 'EU-East', y: 4.67 },
            { name: 'Asia', y: 4.18 },
            { name: 'Other', y: 7.05 }
        ]
    }]
};

export default function (){
    return ( 
        <HighchartsReact highcharts={Highcharts} options={options} 
        containerProps={{ style: { height: '100%' } }}
/>
    );
}