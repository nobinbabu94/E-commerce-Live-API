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
            <div className='p-5 flex-col items-center justify-center'>
                <h1>{ }</h1>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <button className='bg-red-600 rounded w-24 h-8' onClick={() => this.setState({ count: 1 })}>Add</button>
                <h1>{this.state.count}</h1>
                <Profile xyz={'hello'} />

            </div>
        )
    }
}

export default About;