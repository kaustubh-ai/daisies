/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {render} from '@react-email/render'
import {GenerateEmail} from './GenerateEmail.jsx'

export const Email = () => {
	const html = render(<GenerateEmail/>, {pretty: true})
	console.log(html)
	
	// useEffect(() => {
	// 	console.log('downloading email.html')
	// 	download('signup_otp.html', html)
	// }, [html])
	
	return (
		<GenerateEmail/>
	)
}
