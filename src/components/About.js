import React from 'react'

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }

        console.log('about')


    }



    render() {


        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({ count: this.state.count+1 })
                }
                }>
                    +
                </button>


            </>
        )
    }
}

export default About;