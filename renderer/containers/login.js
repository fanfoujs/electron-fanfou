import electron from 'electron';
import {Container} from 'unstated';

export default class LoginContainer extends Container {
	remote = electron.remote || false;

	state = {};

	mount = () => {
		this.ff = this.remote.require('./common/fanfou');
	}
}
