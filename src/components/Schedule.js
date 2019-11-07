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
                    const resp = await Axios.get('https://my-json-server.typicode.com/typicode/demo/comments');
                    // console.log(resp.data[0].body);

                    this.setState(() => ({
                        data: resp.data[0].body
                    }));
                }
                }>Get the Schedule</button>

                <h4>{this.state.data}</h4>
            </div>
        );
    }
}




export default Schedule;