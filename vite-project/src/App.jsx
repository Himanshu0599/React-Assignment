import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PostList from './Uicomponents/PostList'
import PostDetails from './Uicomponents/PostDetails'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
