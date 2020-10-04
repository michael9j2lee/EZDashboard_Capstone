import axios from 'axios';
import { getOptions } from 'highcharts';
import Highcharts from 'highcharts';

//Formats and prepares SQL data into series for High Charts
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

//Formats and prepares SQL columns into categories for High Charts
function getCategories(results){
    var colDate = [];
    var totalRecords = results.recordset.length;

    for(var i = 0; i < totalRecords ; i++){
        colDate.push(results.recordset[i].Date_YYYYMMDD.substring(0,10));
    }
    return colDate;
}

//Formats and prepares the final Options for High Charts.
export default function getData(results){
    var finalOpt = null;
    finalOpt =  {
        
        chart: {
            type: 'column'
        },
        title: {
            text: 'GEWS Counts'
        },
        xAxis: {
            categories: getCategories(results),
            title:{
                text: 'Date'
            }
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
        series: formatData(results)
    };
    return finalOpt;
}