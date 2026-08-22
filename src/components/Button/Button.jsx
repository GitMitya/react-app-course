import styles from './Button.module.css'

const isPrimary = true

export const Button = () => {
	return <div className={isPrimary ? styles.primary : styles.btn}>Click me</div>
}
