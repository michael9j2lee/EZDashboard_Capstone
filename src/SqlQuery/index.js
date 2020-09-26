import React, { Component } from 'react';

class SqlQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded:false,
        }
    }


    componentDidMount(){
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(json => { 
                this.state({
                    isLoaded: true,
                    items: json,
                })
            });
    }
}