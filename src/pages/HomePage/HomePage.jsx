import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { useFetch } from '../../hooks/useFetch'
import { API_URL } from './../../constants/index'

export const HomePage = () => {
	const [questions, setQuestions] = useState([])
	const [getQuestions, isLoading, error] = useFetch(async (url) => {
		const response = await fetch(`${API_URL}/${url}`)
		const data = await response.json()
		setQuestions(data)
		return data
	})

	useEffect(() => {
		getQuestions('react')
	}, [])

	return (
		<>
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			<QuestionCardList cards={questions} />
		</>
	)
}
