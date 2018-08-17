import React from 'react'
import ReactDom from 'react-dom'
import {
	AppContainer
} from 'react-hot-loader'
import App from './App.jsx'

// ReactDom.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')
const render = Component => {
	ReactDom.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
		root
	)
}

render(App)

if (module.hot) {
	//当热更新的代码存在，把App.jsx重新加载一遍
	module.hot.accept('./App.jsx', () => {
		const NextApp = require('./App.jsx').default
		//.default是因为在App里面export default这种写法。

		// ReactDom.hydrate(<NextApp />, document.getElementById('root'))
		render(NextApp)
	})
}