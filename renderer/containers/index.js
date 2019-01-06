import React from 'react';
import {Subscribe} from 'unstated';

export const connect = (containers, mapState, mapAction) => Component => props => (
	<Subscribe to={containers}>
		{(...containers) => {
			const stateProps = mapState ? mapState(...containers.map(a => a.state)) : {};
			const actionProps = mapAction ? mapAction(...containers) : {};
			const componentProps = {...props, ...stateProps, ...actionProps};

			return <Component {...componentProps}/>;
		}}
	</Subscribe>
);
