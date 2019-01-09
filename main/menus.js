'use strict';

const {Menu} = require('electron');

const menuTemplate = [{
	label: 'Hello Fanfou'
}, {
	type: 'separator'
}, {
	label: 'test'
}];

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = {
	menu
};
