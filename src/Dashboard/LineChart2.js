import React  from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';
import lineData from './LineData';



class LineChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    
    async componentDidMount(){
        let data = await lineData.query1();
        this.setState({data});
    }
}


const lineChart2 = new LineChart();
export default function(){}
