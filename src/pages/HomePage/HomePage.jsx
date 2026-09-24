import { useEffect, useState } from 'react'
import { QuestionCardList } from '../../components/QuestionCardList'
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
			<QuestionCardList cards={questions} />
		</>
	)
}
