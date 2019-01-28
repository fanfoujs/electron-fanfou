import React from 'react';
import {Provider} from 'unstated';

import LoginForm from '../components/login-form';

import LoginContainer from '../containers/login';

const loginContainer = new LoginContainer();

export default class LoginPage extends React.Component {
	state = {}

	componentDidMount() {
		loginContainer.mount();
		const ipc = require('electron-better-ipc');
		ipc.callMain('login-ready');
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form:', values);
			}
		});
	}

	render() {
		return (
			<div>
				<Provider inject={[loginContainer]}>
					<LoginForm/>
				</Provider>
				<style jsx global>{`
					html,
					body {
						-webkit-app-region: drag;
						margin: 0;
						padding: 20px 15px 5px 5px;
						height: 100vh;
						width: 100vw;
					}
					div {
						-webkit-app-region: no-drag;
					}
					.login-form {
						max-width: 100%;
					}
					.login-form-forgot {
						float: right;
					}
					.login-form-button {
						width: 100%;
					}
					`}
				</style>
			</div>
		);
	}
}
