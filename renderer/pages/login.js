import electron from 'electron';
import React from 'react';

export default class LoginPage extends React.Component {
	state = {}

	componentDidMount() {
		electron.ipcRenderer.send('login-ready');
	}

	render() {
		return (
			<div>
				Login Page
				<style jsx global>{`
					html,
					body {
						-webkit-app-region: drag;
						margin: 0;
						padding: 20px 5px 5px 5px;
						height: 100vh;
						width: 100vw;
					}
					div {
						-webkit-app-region: no-drag;
					}
					`}
				</style>
			</div>
		);
	}
}
