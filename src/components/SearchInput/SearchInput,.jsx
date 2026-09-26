import { useId } from 'react'
import { SearchIcon } from '../icons'
import cls from './SearchInput.module.css'

export const SearchInput = ({ value, onChange }) => {
	const inputId = useId()

	return (
		<div className={cls.inputContainer}>
			<label htmlFor={inputId}>
				<SearchIcon className={cls.searchIcon} />
			</label>
			<input className={cls.input} id={inputId} type="text" value={value} onChange={onChange} placeholder="Search..." />
		</div>
	)
}
