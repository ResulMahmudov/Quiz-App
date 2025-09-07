
import TopicSelect from './Components/TopicSelect'
import { Route, Routes } from 'react-router-dom'
import QuizPage from './Components/QuizPage'



const App = () => {
  return (
  <Routes>
      <Route path="/" element={<TopicSelect />} />
      <Route path="/quiz/:topicId" element={<QuizPage />} />
    </Routes>
  )
}

export default App