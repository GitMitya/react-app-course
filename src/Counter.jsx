import { useState } from 'react'
import { Button } from './components/Button/Button'

export const Counter = () => {
	let [count, setCount] = useState(0)

	const setCounterHandler = () => {
		setCount((prevCount) => prevCount + 1)
	}

	return (
		<div>
			<Button title={`Count is ${count}`} onClick={setCounterHandler} />
		</div>
	)
}
