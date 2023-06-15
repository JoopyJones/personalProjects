import './App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';

//Pages
import Home from './Pages/Home'; 
import Stories from './Pages/Stories';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import MagicCards from './Pages/MagicCards';

//Layouts
import RouterLayout from './Layouts/RouterLayout';
import AboutLayout from './Layouts/AboutLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<AboutLayout/>}>
          <Route path='contact' element={<Contact/>}/>
          <Route path='magic-cards' element={<MagicCards/>}/>
        </Route>
        <Route path='stories' element={<Stories/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
