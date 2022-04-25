import React from 'react';
import { Provider } from 'react-redux';

// import createStore from './src/state/store';
import {store} from './src/state/store';

export default ({ element }) => {
	// Instantiating store in `wrapRootElement` handler ensures:
	//  - there is fresh store for each SSR page
	//  - it will be called only once in browser, when React mounts
	// const store = createStore();
	return <Provider store={store}>{element}</Provider>;
};