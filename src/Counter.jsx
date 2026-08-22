import { useState } from 'react'
import { Button } from './components/Button/Button'

export const Counter = () => {
	let [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count => count + 1)
	}

	return (
		<div>
			<Button title={`Count is ${count}`} onClick={handleClick} />
		</div>
	)
}
