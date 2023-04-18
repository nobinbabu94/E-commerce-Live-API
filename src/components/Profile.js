import React from 'react'
import ShimmerUi from './ShimmerUi'

class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            gitApi: '',
            isLoading:true
           
        }
        console.log('child constructor')
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/amsadams')
        const json = await data.json();
        console.log('child', json)

        this.setState({ gitApi: json })
        this.setState({ isLoading: false })
        console.log('child - component mount')

    }

    render() {
        console.log('child render')
        const { login, avatar_url, name } = this.state.gitApi;
        const { count } = this.state
        return (
            <>

               {this.state.isLoading === true ? <ShimmerUi/> :  
               <>
                <h1>{name}</h1>
                <img src={avatar_url} />
                <h5>username:{login}</h5>
                </>
}
            </>
        )
    }
}

export default Profile;