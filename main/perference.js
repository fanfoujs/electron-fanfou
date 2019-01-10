'use strict';

const {BrowserWindow, ipcMain} = require('electron');
const pEvent = require('p-event');

let prefsWindow = null;

const openPrefsWindow = async () => {
	if (prefsWindow) {
		prefsWindow.show();
		return prefsWindow;
	}

	prefsWindow = new BrowserWindow({
		width: 480,
		height: 480,
		resizable: false,
		minimizable: false,
		maximizable: false,
		fullscreenable: false,
		titleBarStyle: 'hiddenInset',
		show: false
	});

	const titlebarHeight = 85;
	prefsWindow.setSheetOffset(titlebarHeight);

	prefsWindow.on('close', () => {
		prefsWindow = null;
	});

	await pEvent(ipcMain, 'preferences-ready');
	prefsWindow.show();
	return prefsWindow;
};

const closePrefsWindow = () => {
	if (prefsWindow) {
		prefsWindow.close();
	}
};

module.exports = {
	openPrefsWindow,
	closePrefsWindow
};
