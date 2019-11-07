import React from 'react';
import Axios from 'axios';

class Schedule extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }
    render() {
        return (
            <div>
                <div id='header'>
                    <h2>VodQA 2019 Schedule</h2></div>

                <button id='submit' onClick={async (event) => {
                    event.preventDefault();
                    const resp = await Axios.get('http://my-json-server.typicode.com/shridharkalagi/vodqa-2019/workshops');
                    console.log(resp.data[0]);

                    this.setState(() => ({
                        data: resp.data[0].name
                    }));
                }
                }>Get the Current Agenda</button>

                <h4>{this.state.data}</h4>
            </div>
        );
    }
}




export default Schedule;