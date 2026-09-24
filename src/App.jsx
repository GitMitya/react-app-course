import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/forbidden" element={<div>Forbidden Content</div>} />
					<Route path="/addquestion" element={<div>Add Question Content</div>} />
					<Route path="/question/:id" element={<div>Question Detail Content</div>} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
