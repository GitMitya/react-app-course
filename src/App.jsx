import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout/MainLayout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<div>Home Content</div>} />
					<Route path="/forbidden" element={<div>Forbidden Content</div>} />
					<Route path="/addquestion" element={<div>Add Question Content</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
