import { useEffect, useState } from 'react'
import { QuestionCard } from '../../components/QuestionCard'
import { API_URL } from '../../constants'

export const HomePage = () => {
	const [questions, setQuestions] = useState([])

	useEffect(() => {
		const getQuestions = async () => {
			try {
				const response = await fetch(`${API_URL}/react`)
				const data = await response.json()

				setQuestions(data)

				console.log('Fetched questions:', data)
			} catch (error) {
				console.error('Failed to fetch questions:', error)
			}
		}

		getQuestions()
	}, [])

	return (
		<>
			{questions.map((question, index) => {
				return <QuestionCard key={index} card={question} />
			})}
		</>
	)
}
