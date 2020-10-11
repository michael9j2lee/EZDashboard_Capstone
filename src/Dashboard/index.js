import React from 'react';
import DrillDownBarGraph from './DrillDownBar';
import StackedBar from '../StackedBar';
import DynamicLineGraph from './DynamicLineGraph';
import PieChart from './PieChart'
import GridLayout from 'react-grid-layout'
import ExCard from './ExCard';
import ExCard2 from './ExCard2';
import ExCard3 from './ExCard3';
import ExCard4 from './ExCard4';
import AccordianExAccordianExample from './ExampleTable';


 export default function (){
    //Layout for 
    const layout = [
        //Right pane
        {i: 'drill', x:3,y:3,w:4,h:2},
        {i: 'stacked', x:3,y:4,w:4,h:2},
        {i: 'dLine', x:3,y:2,w:4,h:2},
        //Left Pane
        {i: 'card1',x:0,y:3,w:1,h:1}, 
        {i: 'card3',x:1,y:3,w:1,h:1},
        {i: 'card4',x:2,y:3,w:1,h:1},
        {i: 'pie', x:1,y:4,w:2,h:2},
        {i: 'card2',x:0,y:4,w:1,h:2},
        
        {i: 'accord', x:0,y:0,w:3,h:2.5,static:true},
    ];


    return (

        <GridLayout className="layout" 
        layout={layout} 
        cols={8} 
        rowHeight={200} 
        width={2400}
        padding={5}
        >
           
            {/* Right Pane*/}
            <div key= "drill" ><DrillDownBarGraph/></div>
            <div key= "stacked" ><StackedBar/></div>
            <div key= "dLine" ><DynamicLineGraph/></div>

            {/*Left Pane*/}
            <div key = "pie" ><PieChart/></div>
            <div key= "card2" ><ExCard2/></div>


            <div key= "card1" ><ExCard/></div>
            <div key= "card3" ><ExCard3/></div>
            <div key= "card4" ><ExCard4/></div>

            <div key = "accord" ><AccordianExAccordianExample/></div>

        </GridLayout>

    )
}



