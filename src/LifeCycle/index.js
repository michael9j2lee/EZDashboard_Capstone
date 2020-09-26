import React from 'react';
import LifeCycle from './LifeCylce';
import Graphs from '../Dashboard';
import { numberFormat } from 'highcharts';



export default function (){
    console.log('Tick');
    
    return (
        <div>
            <Graphs/>
        </div>
    );
}