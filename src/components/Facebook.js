import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import Builds from './builds'


export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        first_name: ''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            first_name: response.first_name
        })
    }

    componentClicked = () => console.log ("clicked");

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '100%',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2> Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                    <p>
                       Click <a href="https://labancarrier.org/">here</a> to access Labancarrier.org
                    </p>
                    <Builds />
                    

                </div>
                
            );
        } else {
            fbContent = (<FacebookLogin
                appId="1738588622932413"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
