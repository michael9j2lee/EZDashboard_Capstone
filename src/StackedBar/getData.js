import axios from 'axios';
import { getOptions } from 'highcharts';
import Highcharts from 'highcharts';

// export default async function getData () {
//     const apiURL = "http://localhost:5000/query";

//     const axiosOptions = {
//         url: apiURL,
//         method: 'POST',
//         headers:{
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type':'application/json'
//         },
//         data :{
//             query:1
//         }
//     }
//     const res =  await axios(axiosOptions)
//     .then(response => response.data)

//     var result = formatoptions(res);

//     return result;
// }

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
            colDate.push(results.recordset[i].Date_YYYYMMDD.substring(0,10));
        }
        return colDate;
    }

    export default function getData(results){
        // return new Promise(function(resolve,reject){
            var finalOpt = null;
            finalOpt =  {
                
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Counts'
                },
                xAxis: {
                    categories: getCategories(results)
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