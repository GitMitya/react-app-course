import { QuestionCard } from '../QuestionCard'
import cls from './QuestionCardList.module.css'

export const QuestionCardList = ({ cards }) => {
	return (
		<div className={cls.cardList}>
			{cards.map((card, index) => (
				<QuestionCard key={index} card={card} />
			))}
		</div>
	)
}
