/* eslint-disable no-mixed-spaces-and-tabs */

import {Email} from './components/Email.jsx'
import { render } from '@react-email/render'

function App() {
	const html = render(<Email/>, {pretty: true})
	
	console.log(html)
	
	return (
		<Email/>
	)
}

export default App
