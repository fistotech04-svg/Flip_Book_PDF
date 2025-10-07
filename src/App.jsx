import My_Book from './Components/my_book'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Flip_Book_PDF' element={<My_Book/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
