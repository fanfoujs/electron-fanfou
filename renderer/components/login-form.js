import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {connect, LoginContainer} from '../containers';

class LoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				const {username, password} = values;
				const {login} = this.props;
				const {oauthToken, oauthTokenSecret} = await login(username, password);
				console.log(oauthToken, oauthTokenSecret);
			}
		});
	}

	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			<Form className="login-form" onSubmit={this.handleSubmit}>
				<Form.Item>
					{getFieldDecorator('username', {
						rules: [{required: true, message: 'Please input your username!'}]
					})(
						<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [{required: true, message: 'Please input your Password!'}]
					})(
						<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="Password"/>
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default connect(
	[LoginContainer],
	() => ({}),
	({login}) => ({login})
)(Form.create({name: 'login-form'})(LoginForm));
