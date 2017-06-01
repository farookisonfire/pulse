import React from 'react';
import Auth0Lock from 'auth0-lock';
import decode from 'jwt-decode';
import config from './authLockConfig';

export default class AuthService {

    constructor() {
        this.clientId = 'XllRZYxeAydFq8nMUio5jxOqC7DvXZmf';
        this.domain = 'fayahmon.auth0.com';
        this.lock = new Auth0Lock(this.clientId, this.domain, config);
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        this.login = this.login.bind(this);
    }

    _doAuthentication(authResult){
        this.setToken(authResult.idToken);
    }

    getLock() {
        return new Auth0Lock(this.clientId, this.domain, {});
    }

    login() {
        this.lock.show();
    }

    loggedIn() {
        const idToken = this.getToken();
        return idToken && !this.isTokenExpired(idToken);
    }

    setToken(idToken){
        localStorage.setItem('id_token', idToken);
    }

    getToken(){
        return localStorage.getItem('id_token');
    }

    logout(){
        localStorage.removeItem('id_token');
    }

    getTokenExpirationDate(encodedToken) {
        const token = decode(encodedToken);
        if (!token.exp) { return null; }

        const date = new Date(0);
        date.setUTCSeconds(token.exp);

        return date;
    }

    isTokenExpired(token) {
        const expirationDate = this.getTokenExpirationDate(token);
        return expirationDate < new Date();
    }
}
