'use strict';

const {BrowserWindow, ipcMain} = require('electron');
const pEvent = require('p-event');

const loadRoute = require('./utils/routes');

let loginWindow = null;

const openLoginWindow = async () => {
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
		show: false,
		titleBarStyle: 'hiddenInset'
	});

	loadRoute(loginWindow, 'login');

	loginWindow.on('close', () => {
		loginWindow = null;
	});

	await pEvent(ipcMain, 'login-ready');
	loginWindow.show();
	return loginWindow;
};

const closeLoginWindow = () => {
	loginWindow = null;
};

module.exports = {
	openLoginWindow,
	closeLoginWindow
};
