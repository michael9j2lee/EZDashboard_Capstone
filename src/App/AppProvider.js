import React from 'react';
import getResults from '../StackedBar';
import fetchData from './fetchData';
import axios from 'axios';

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage:this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () =>{
        this.getData();
    }

    getData = async () => {
        const apiURL = "http://localhost:5000/query";

        const axiosOptions = {
            url: apiURL,
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            data :{
                query:1
            }
        }
        const dataResults =  await axios(axiosOptions)
        .then(response => response.data)

        // console.log("COMPONENT DID MOUNT",dataResults);
        this.setState({dataResults});
        // this.setState({dataLoaded:true});
    }

    confirmFavorites = () =>{
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('ezDashboard', JSON.stringify({
            test: 'testing'
        }));

        console.log(localStorage.getItem('ezDashboard'));
    }

    savedSettings(){
        let ezDashboardData = JSON.parse(localStorage.getItem('ezDashboard'));
        if (!ezDashboardData){
            return  ({page: 'settings', firstVisit: true})
        }
        return ({
            page: 'settings'
        })
    }


    setPage = page => this.setState({page})
    
    render(){
        return (
            <AppContext.Provider value = {this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}