'use strict';

const {app} = require('electron');
const {initializeTray} = require('./tray');

(async () => {
	await app.whenReady();

	initializeTray();
})();

app.on('window-all-closed', event => event.preventDefault());
