import electron from 'electron';
import React from 'react';

export default class AboutPage extends React.Component {
	state = {}

	async componentDidMount() {
		const {app} = electron.remote;
		const {getAppIcon} = electron.remote.require('./utils/icon');

		const icon = await getAppIcon();

		this.setState({
			name: app.getName(),
			version: app.getVersion(),
			icon
		});
	}

	componentDidUpdate() {
		const ipc = require('electron-better-ipc');
		ipc.callMain('about-ready');
	}

	openGithub = () => electron.remote.shell.openExternal('https://github.com/fanfoujs/electron-fanfou')

	openLicense = () => electron.remote.shell.openExternal('https://github.com/fanfoujs/electron-fanfou/blob/master/LICENSE.md')

	openPrivacy = () => electron.remote.shell.openExternal('https://github.com/fanfoujs/electron-fanfou/blob/master/PRIVACY.md')

	render() {
		const {name, icon, version} = this.state;

		if (!name) {
			return null;
		}

		return (
			<div className="container cover-window">
				<img className="icon" src={`data:image/png;base64, ${icon}`}/>
				<div className="name">{name}</div>
				<div className="version">Version {version}</div>
				<div className="copyright">Copyright © FanfouJS</div>
				<footer>
					<div className="link" onClick={this.openGithub}>GitHub</div>
					<div className="link" onClick={this.openLicense}>License</div>
					<div className="link" onClick={this.openPrivacy}>Privacy</div>
				</footer>
				<style jsx global>{`
					html {
						font-size: 62.5%;
					}
					html,
					body,
					.cover-window {
						margin: 0;
						width: 100vw;
						height: 100vh;
						font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
					}
					.container {
						display: flex;
						flex-direction: column;
						align-items: center;
						background-color: #ececec;
					}
					.icon {
						width: 64px;
						height: 64px;
						margin: 8px 0;
						pointer-events: none;
						user-select: none;
					}
					.name {
						font-weight: bold;
						font-size: 1.6rem;
					}
					.version,
					.copyright {
						margin-top: 8px;
					}
					footer {
						margin-top: 8px;
						color: #007aff;
						font-weight: 500;
						display: flex;
					}
					.link {
						cursor: pointer;
					}
					.link + .link {
						margin-left: 16px;
					}`}
				</style>
			</div>
		);
	}
}
