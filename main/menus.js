'use strict';

const {app, Menu} = require('electron');
const {openAboutWindow} = require('./about');

const menuTemplate = [{
	label: `About ${app.getName()}`,
	click: openAboutWindow
}, {
	type: 'separator'
}, {
	role: 'quit',
	accelerator: 'Command+Q'
}];

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = {
	menu
};
