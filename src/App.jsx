import { Route, Routes } from 'react-router-dom'
import TopicSelect from './pages/TopicSelect'
import QuizPage from './pages/QuizPage'
import Finished from './pages/Finished'




const App = () => {
  return (
  <Routes>
      <Route path="/" element={<TopicSelect />} />
      <Route path="/quiz/:topicId" element={<QuizPage />} />
       <Route path="/finished" element={<Finished />} />
    </Routes>
  )
}

export default App