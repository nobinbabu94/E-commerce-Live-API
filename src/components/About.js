import React, { Profiler } from 'react'
import Profile from './Profile';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        console.log('Parent inside constructor')

    }

    componentDidMount() {

        console.log('Parent component mount')

    }


    render() {
        console.log('Parent inside render')
        return (
            <>
                <h1>{ }</h1>
                <h1 class="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <button onClick={() => this.setState({ count: 1 })}>Add</button>
                <h1>{this.state.count}</h1>
                <Profile xyz={'hello'} />

            </>
        )
    }
}

export default About;