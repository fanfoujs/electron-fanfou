'use strict';

const {BrowserWindow} = require('electron');
const ipc = require('electron-better-ipc');
const delay = require('delay');

const loadRoute = require('./utils/routes');

let aboutWindow = null;

const openAboutWindow = () => {
	if (aboutWindow) {
		aboutWindow.show();
		return aboutWindow;
	}

	aboutWindow = new BrowserWindow({
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

	loadRoute(aboutWindow, 'about');

	ipc.answerRenderer('about-ready', async () => {
		await delay(100);
		aboutWindow.show();
	});

	aboutWindow.on('close', () => {
		aboutWindow = null;
	});
};

const closeAboutWindow = () => {
	aboutWindow = null;
};

module.exports = {
	openAboutWindow,
	closeAboutWindow
};
