import cls from './Button.module.css'

export const Button = ({ isActive, onClick, isDisabled, children }) => {
	return (
		<button className={`${cls.btn} ${isActive ? cls.active : ''}`} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	)
}
