import React from "react";
import axios from 'axios';

import './App.css';
class app extends React.Component{
    state = {advice: ''};
    componentDidMount(){
        this.fetchAdvice();
        //console.log('COMPONENT DID MOUNT');
        
    }
    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((responce) =>{
            const{ advice } = responce.data.slip;
            //console.log(advice);
            this.setState({ advice });

        })
        .catch((error) =>{
            console.log(error);

        });
    }
    render(){
        const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default app;