import React, { Profiler } from 'react'
import Profile from './Profile';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            count: ''
        }

        console.log('Parent inside constructor')

       
    }
    componentDidMount(){
        console.log('parent component mount')
    }

    // async componentDidMount() {
    //     const data = await fetch('https://api.github.com/users/nobinbabu94')
    //     const json = await data.json();
    //     console.log('parent', json)

    //     this.setState({ count: json })
    //     console.log('Parent - component mount')

    // }

    componentWillUnmount(){
        console.log('unmount')
    }

    render() {
        console.log('Parent inside render')
        return (
            <>
                {/* <h1>{}</h1>
                <h1>{this.state.count.name}</h1>
                <img src={this.state.count.avatar_url}/> */}
                <Profile xyz={'hello'} />
            </>
        )
    }
}

export default About;