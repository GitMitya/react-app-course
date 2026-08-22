import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Counter } from './Counter'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<section id='center'>
				<button type='button' className='counter' onClick={() => setCount(count => count + 1)}>
					Count is {count}
				</button>
				<Button onClick={() => setCount(count => count + 1)} title={`Count is ${count}`} />
				<Counter />
			</section>
		</>
	)
}

export default App
