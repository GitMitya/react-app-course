import { useState } from 'react'
import { delayFn } from '../helpers/delayFn'

export const useFetch = (callback) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const FetchFn = async (arg) => {
		try {
			setIsLoading(true)
			setError('')
			await delayFn()

			const response = await callback(arg)
			return response
		} catch (error) {
			setError(error.message || 'Something went wrong')
		} finally {
			setIsLoading(false)
		}
	}

	return [FetchFn, isLoading, error]
}
