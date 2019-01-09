'use strict';

const {Tray} = require('electron');
const path = require('path');
const {menu} = require('./menus');

let tray = null;

const openContextMenu = () => {
	tray.popUpContextMenu(menu);
};

const initializeTray = () => {
	tray = new Tray(path.join(__dirname, '..', 'static', 'icon.png'));
	tray.on('click', () => {
		openContextMenu();
	});
	return tray;
};

const disableTray = () => {
	tray.removeListener('click', openContextMenu);
};

module.exports = {
	initializeTray,
	disableTray
};
