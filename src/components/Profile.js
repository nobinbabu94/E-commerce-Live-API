import React from 'react'
import ShimmerUi from './ShimmerUi'

class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            gitApi: '',
            isLoading:true,
            count:0
           
        }
        console.log('child constructor')
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/amsadams')
        const json = await data.json();
        console.log('child', json)

        this.setState({ gitApi: json, isLoading: false })
        
        console.log('child - component mount')

    }

    componentDidUpdate(){
        console.log('component did update')
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

                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:count+1})}>Add</button>
                </>
}
            </>
        )
    }
}

export default Profile;