import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount() {
        const message = {
            text: 'this is a message from the client, Hello!',
            name: 'kate'
        }

        const postResp = await axios.post('/api/send-message', message);

        console.log('send message resp:', postResp);
        const resp = await axios.get('/api/test');

        console.log('Test Response:', resp);

        const user = await axios.get('/api/user');

        console.log('user response:', user)
    }
    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        )
    }
}
export default Test;