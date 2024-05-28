/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {useState} from 'react'

export const Toggle = () => {
	const [checked, setChecked] = useState(false)
	
	function handleClick() {
		console.log('clicked')
		setChecked(!checked)
	}
	
	function trackStyle() {
		return checked ? 'bg-teal-500' : 'bg-red-400'
	}
	
	function thumbStyle() {
		return checked ? 'bg-green-200 translate-x-5' : 'bg-gray-700'
	}
	
	return (
		<div className='flex h-screen select-none items-center justify-center gap-x-3'>
			<div className='flex items-center justify-center gap-x-3'>
				<p className='cursor-pointer' onClick={handleClick}>Click</p>
				
				<div className={`relative p-0.5 h-5 w-10 rounded-full cursor-pointer transition-all duration-200 ${trackStyle()}`}
				     onClick={handleClick}>
					<div className={`absolute h-4 w-4 rounded-full transition-all duration-200 ${thumbStyle()}`}/>
				</div>
			</div>
		</div>
	)
}
