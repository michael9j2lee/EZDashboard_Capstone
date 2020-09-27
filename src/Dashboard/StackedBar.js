import React  from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import getData from './getData';


async function getResults(){
    let results =  await getData();
    let ser = formatData(results);
    let cat = getCategories(results);
    let opt = getOptions(cat,ser);
    console.log(JSON.stringify(opt));
    return opt;
}

function formatData(results){
    var sumWestItems = [];
    var sumEastItems = [];
    var sumTotal= [];
    
    var totalRecords = results.recordset.length;

    for(var i = 0; i < totalRecords ; i++){
        
        let sumWest = results.recordset[i].sumWest;
        let sumEast = results.recordset[i].sumEast;
        sumWestItems.push(sumWest);
        sumEastItems.push(sumEast);
        sumTotal.push(sumWest + sumEast);
    }

    let series = [
        {
            name: "sumWest",
            data: sumWestItems
        },
        {
            name: "sumEast",
            data: sumEastItems
        }
    ];

    return series;
}

function getCategories(results){
    var colDate = [];
    var totalRecords = results.recordset.length;

    for(var i = 0; i < totalRecords ; i++){
        colDate.push(results.recordset[i].Date_YYYYMMDD);
    }
    return colDate;
}

function getOptions(inCategories,inData){
    return {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Counts'
        },
        xAxis: {
            categories: inCategories
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Counts'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: inData
    }
}



let options = {
    "chart": {
      "type": "column"
    },
    "title": {
      "text": "Counts"
    },
    "xAxis": {
      "categories": [
        "2020-06-01T00:00:00.000Z",
        "2020-06-02T00:00:00.000Z",
        "2020-06-03T00:00:00.000Z",
        "2020-06-04T00:00:00.000Z",
        "2020-06-05T00:00:00.000Z",
        "2020-06-06T00:00:00.000Z",
        "2020-06-07T00:00:00.000Z",
        "2020-06-08T00:00:00.000Z",
        "2020-06-09T00:00:00.000Z",
        "2020-06-10T00:00:00.000Z",
        "2020-06-11T00:00:00.000Z",
        "2020-06-12T00:00:00.000Z",
        "2020-06-13T00:00:00.000Z",
        "2020-06-14T00:00:00.000Z",
        "2020-06-15T00:00:00.000Z",
        "2020-06-16T00:00:00.000Z",
        "2020-06-17T00:00:00.000Z",
        "2020-06-18T00:00:00.000Z",
        "2020-06-19T00:00:00.000Z",
        "2020-06-20T00:00:00.000Z",
        "2020-06-21T00:00:00.000Z",
        "2020-06-22T00:00:00.000Z",
        "2020-06-23T00:00:00.000Z",
        "2020-06-24T00:00:00.000Z",
        "2020-06-25T00:00:00.000Z",
        "2020-06-26T00:00:00.000Z",
        "2020-06-27T00:00:00.000Z",
        "2020-06-28T00:00:00.000Z",
        "2020-06-29T00:00:00.000Z",
        "2020-06-30T00:00:00.000Z",
        "2020-07-01T00:00:00.000Z",
        "2020-07-02T00:00:00.000Z",
        "2020-07-03T00:00:00.000Z",
        "2020-07-04T00:00:00.000Z",
        "2020-07-05T00:00:00.000Z",
        "2020-07-06T00:00:00.000Z",
        "2020-07-10T00:00:00.000Z"
      ]
    },
    "yAxis": {
      "min": 0,
      "title": {
        "text": "Counts"
      },
      "stackLabels": {
        "enabled": true,
        "style": {
          "fontWeight": "bold",
          "color": "gray"
        }
      }
    },
    "legend": {
      "align": "right",
      "x": -30,
      "verticalAlign": "top",
      "y": 25,
      "floating": true,
      "backgroundColor": "white",
      "borderColor": "#CCC",
      "borderWidth": 1,
      "shadow": false
    },
    "tooltip": {
      "headerFormat": "<b>{point.x}</b><br/>",
      "pointFormat": "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
    },
    "plotOptions": {
      "column": {
        "stacking": "normal",
        "dataLabels": {
          "enabled": true
        }
      }
    },
    "series": [
      {
        "name": "sumWest",
        "data": [
          10133,
          44002,
          47980,
          51189,
          43462,
          49012,
          43919,
          48766,
          45095,
          46556,
          45607,
          46350,
          27503,
          17057,
          39114,
          57216,
          47843,
          49319,
          49385,
          39770,
          28217,
          52964,
          49488,
          53242,
          46561,
          55511,
          39783,
          30296,
          52057,
          56997,
          60837,
          82030,
          51469,
          21112,
          31625,
          38053,
          2875
        ]
      },
      {
        "name": "sumEast",
        "data": [
          102358,
          75399,
          116902,
          50205,
          18828,
          12485,
          11366,
          43311,
          103326,
          32891,
          29102,
          30333,
          4596,
          3043,
          16515,
          128717,
          168346,
          39678,
          18974,
          11556,
          10223,
          31059,
          61709,
          42167,
          22019,
          21558,
          11865,
          10703,
          80229,
          38646,
          24214,
          21245,
          14195,
          9819,
          10227,
          15162,
          2711
        ]
      }
    ]
  }



export default function (){
    let options2 =  getResults();

    return ( 
        <HighchartsReact highcharts={Highcharts} options={options} />
    );
}