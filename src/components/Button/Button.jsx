import styles from './Button.module.css'

const isPrimary = true

export const Button = ({ onClick, title }) => {
	return (
		<div onClick={onClick} className={isPrimary ? styles.primary : styles.btn}>
			{title}
		</div>
	)
}
