import React from 'react';

export default class LoginPage extends React.Component {
	state = {}

	componentDidUpdate() {
		const ipc = require('electron-better-ipc');
		ipc.callMain('login-ready');
	}

	render() {
		return <div>Login Page</div>;
	}
}
