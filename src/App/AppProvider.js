import React from 'react';

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