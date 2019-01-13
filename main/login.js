'use strict';

const {BrowserWindow} = require('electron');
const ipc = require('electron-better-ipc');
const delay = require('delay');

const loadRoute = require('./utils/routes');

let loginWindow = null;

const openLoginWindow = () => {
	if (loginWindow) {
		loginWindow.show();
		return loginWindow;
	}

	loginWindow = new BrowserWindow({
		width: 284,
		height: 200,
		resizable: false,
		maximizable: false,
		minimizable: false,
		fullscreenable: false,
		title: '',
		center: true,
		show: false
	});

	loadRoute(loginWindow, 'login');

	ipc.answerRenderer('login-ready', async () => {
		await delay(100);
		loginWindow.show();
	});

	loginWindow.on('close', () => {
		loginWindow = null;
	});
};

const closeLoginWindow = () => {
	loginWindow = null;
};

module.exports = {
	openLoginWindow,
	closeLoginWindow
};
