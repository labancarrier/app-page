import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import Builds from './components/builds'


export default class App extends Component {
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
      let auth;
      if(this.state.name == 'Laban Carrier', this.state.email == 'labecarrier@yahoo.com') {
          auth = (<Builds />)
              
      } else {
          auth = `Sorry ${this.state.name} this site is for Laban Carrier only.`
      }

      let fbContent;
      
        if(this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '100%',
                    margin: 'auto',
                    background: 'white',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <p>Email: {this.state.email}</p>
                    {auth}
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


        let welcome;
        if(this.state.isLoggedIn) {
            welcome = (`Welcome ${this.state.name}`)
                
        } else {
            welcome = 'Labans Apps'
        }

        let message;
        if(this.state.isLoggedIn) {
            message = ('')
                
        } else {
            message = 'To get started Login in with Facebook'
        }


        let headerBackground;
        if(this.state.name == 'Laban Carrier', this.state.email == 'labecarrier@yahoo.com') {
            headerBackground = ( <header className="App-Header1">
            <h1 className="App-title">{welcome}</h1>
            </header>)
                
        } else {
            headerBackground = ( <header className="App-Header2">
            <h1 className="App-title">{welcome}</h1>
            </header>)
        }



        return (
          <div className="App">
            {headerBackground}
              <p>
                {message}
              </p>
                {fbContent}
            
          </div>
        );
    }
}
