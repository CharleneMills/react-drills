import React, { Component } from "react";


class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            loginBox: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.userUpdate = this.userUpdate.bind(this);
        this.pwUpdate = this.pwUpdate.bind(this);

    }

userUpdate(val){
    this.setState({
        username: val
    }) 
}

pwUpdate(val){
    this.setState({
        password: val
    }) 
}

handleLogin(){
    this.setState({
        loginBox: !this.state.loginBox
    })
}


render(){
    return (
      
        <div className="container">
            <input placeholder="username" onChange = { e => this.userUpdate(e.target.value)}/><br/>
            <input placeholder="password" onChange = { e => this.pwUpdate(e.target.value)}/><br/>
            <button className={this.state.loginBox ? 'showbutton hide' : 'showbutton'} onClick = {this.handleLogin}>{`${this.state.loginBox ? 'Hide' : 'Show'} Credentials`}</button>

            { this.state.loginBox && <div class="loginConf"> 
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
            </div> }

        </div>
    )
}

}

export default Login;