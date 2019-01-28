'use strict';

const FanfouSDK = require('fanfou-sdk');

const {consumerKey, consumerSecret} = require('../config/fanfou');

const xauth = (username, password) => {
	const ff = new FanfouSDK({
		consumerKey,
		consumerSecret,
		username,
		password
	});

	return ff.xauth();
};

module.exports = {
	xauth
};
