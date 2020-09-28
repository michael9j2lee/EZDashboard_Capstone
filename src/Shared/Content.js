import React from 'react';
import {AppContext} from '../App/AppProvider';

export default function(props){
    return <AppContext.Consumer>
        {({dataResults}) => {
            if(!dataResults){
                return <div> Loading Data </div>
            }
            else{
                return <div> {props.children} </div>
            }
        }}
    </AppContext.Consumer>
}  