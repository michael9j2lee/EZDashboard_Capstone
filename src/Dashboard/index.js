import React from 'react';
// import { render } from 'react-dom'
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official'
// import LineChart from './LineChart';
import DrillDownBarGraph from './DrillDownBar';
// import {AppContext} from '../App/AppProvider';
import StackedBar from '../StackedBar';
import DynamicLineGraph from './DynamicLineGraph';
import PieChart from './PieChart'
import GridLayout from 'react-grid-layout'
// import styled from "styled-components";
import "react-grid-layout/css/styles.css";
import 'react-resizable/css/styles.css';
// import Gauge from './Gauge';
import ExCard from './ExCard';
import ExCard2 from './ExCard2';
import AccordianExAccordianExample from './ExampleTable';


 export default function (){
    const layout = [
        {i: 'drill', x:3,y:3,w:4,h:2},
        {i: 'stacked', x:3,y:4,w:4,h:2},
        {i: 'dLine', x:3,y:2,w:4,h:2},
        {i: 'pie', x:1,y:1,w:2,h:2},
        {i: 'accord', x:0,y:2,w:3,h:2},
        {i: 'card1',x:0,y:0,w:1,h:1},
        {i: 'card2',x:0,y:1,w:1,h:2}

    ];
    return (

        <GridLayout className="layout" 
        layout={layout} 
        cols={8} 
        rowHeight={200} 
        width={2400}
        padding={20}
        // onResizeStop={function(event) {

        //     this.myRef.current.chart.setSize(this.conRef.current.clientWidth,this.conRef.current.clientHeight)
        //      console.log('hello', event);
        //    }.bind(this)}
        >
           
                {/* <LineChart/> */}
                
                <div key= "drill" className='left' >

                    <DrillDownBarGraph/>

                </div>

                <div key= "stacked" className='left'>
                    <StackedBar/>
                </div>

                <div key= "dLine" className='left'>
                    <DynamicLineGraph/>
                </div>

                <div key = "pie" className='left'>
                    <PieChart/>
                </div>

                <div key = "accord" className='left'>
                    <AccordianExAccordianExample/>
                </div>

                <div key= "card1" className='left'>
                    <ExCard/>
                </div>
                <div key= "card2" className='left'>
                    <ExCard2/>
                </div>



        </GridLayout>

    )
}



