import React from 'react';

class LifeCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }
}