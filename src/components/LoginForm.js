import React, { Component } from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import Button from './Button';

export default class LoginForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            username: "",
            password: "",
        }
        this.handleClick = this.handleClick.bind( this );
        this.handleUsernameChange = this.handleUsernameChange.bind( this );
        this.handlePasswordChange = this.handlePasswordChange.bind( this );
    }
    handleClick ( e ) {
        e.preventDefault();
        alert( "username: " + this.state.username + " password: " + this.state.password );
    }
    handleUsernameChange ( e ) {
        e.preventDefault();
        this.setState( {
            username: e.target.value.toUpperCase()
        } );
    }
    handlePasswordChange ( e ) {
        e.preventDefault();
        this.setState( {
            password: e.target.value
        } );
    }
    render () {
        return (
            <div>
                <TextInput onchange={ this.handleUsernameChange } value={ this.state.username } name="username" />
                <PasswordInput onchange={ this.handlePasswordChange } value={ this.state.password } name="password" />
                <Button onclick={ this.handleClick } value="Login" />
            </div>
        )
    }
}
