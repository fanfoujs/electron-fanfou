'use strict';

const {app} = require('electron');
const prepareNext = require('electron-next');
const {initializeTray} = require('./tray');

(async () => {
	await app.whenReady();

	await prepareNext('./renderer');

	initializeTray();
})();

app.on('window-all-closed', event => event.preventDefault());
