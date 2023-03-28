import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import LayOuts from './components/hoc/LayOuts';
import PostMoreInfo from './components/hoc/PostMoreInfo';
import NotPage from './components/NotPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayOuts/>}>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/posts' element={<PostsPage/>}/>
            </Route>
            <Route path='/posts/:id/url' element={<PostMoreInfo/>}/>
            <Route path='*' element={<NotPage/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
