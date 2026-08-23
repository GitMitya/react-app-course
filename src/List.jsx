const items = [
	{
		task: 'Task 1',
		icon: '🍏',
		isCompleted: false
	},
	{
		task: 'Task 2',
		icon: '👌',
		isCompleted: true
	},
	{
		task: 'Task 3',
		icon: '🎶',
		isCompleted: false
	}
]

const List = () => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<section key={index}>
						<span>{item.task}</span>
						<span>{item.icon}</span>
						<span>{item.isCompleted ? '✅' : '❌'}</span>
					</section>
				)
			})}
		</div>
	)
}

export default List