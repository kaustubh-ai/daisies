/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
// noinspection EqualityComparisonWithCoercionJS

import {useState} from 'react'

export const Radio = () => {
	const [checked, setChecked] = useState({first: false, second: false})
	
	function handleClick(item) {
		if (checked[item] == true) return
		
		if (item == 'first') setChecked({first: true, second: false})
		else setChecked({first: false, second: true})
	}
	
	return (
		<div className='flex flex-col items-start justify-center mx-auto w-fit'>
			<div className='relative flex items-center justify-start gap-x-3'>
				<div className='rounded-full w-4 h-4 bg-teal-200 cursor-pointer' onClick={() => handleClick('first')}/>
				{checked.first && <div className='absolute h-2 w-2 bg-teal-900 rounded-full left-1'></div>}
				<p className='cursor-pointer' onClick={() => handleClick('first')}>LIMIT</p>
			</div>
			
			<div className='relative flex items-center justify-start gap-x-3'>
				<div className='rounded-full w-4 h-4 bg-teal-200 cursor-pointer' onClick={() => handleClick('second')}/>
				{checked.second && <div className='absolute h-2 w-2 bg-teal-900 rounded-full left-1'></div>}
				<p className='cursor-pointer' onClick={() => handleClick('second')}>MARKET</p>
			</div>
		</div>
	)
}
