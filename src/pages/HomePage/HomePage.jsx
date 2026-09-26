import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { SearchInput } from '../../components/SearchInput/SearchInput,.jsx'
import { useFetch } from '../../hooks/useFetch'
import { API_URL } from './../../constants/index'
import cls from './HomePage.module.css'

export const HomePage = () => {
	const [questions, setQuestions] = useState([])
	const [searchValue, setSearchValue] = useState('')

	const [getQuestions, isLoading, error] = useFetch(async (url) => {
		const response = await fetch(`${API_URL}/${url}`)
		const data = await response.json()
		setQuestions(data)
		return data
	})

	useEffect(() => {
		getQuestions('react')
	}, [])

	const onSearchChangeHandler = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<>
			<div className={cls.controlsContainer}>
				<SearchInput value={searchValue} onChange={onSearchChangeHandler} />
			</div>
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			<QuestionCardList cards={questions} />
		</>
	)
}
