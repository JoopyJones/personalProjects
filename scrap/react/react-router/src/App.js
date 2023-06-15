import './App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';

//Pages
import Home from './Pages/Home'; 
import {Stories, storyLoader} from './Pages/Stories';
import NoPage from './Pages/NoPage';
import MagicCards from './Pages/MagicCards';
import Name from './Pages/Name';

//Layouts
import RouterLayout from './Layouts/RouterLayout';
import AboutLayout from './Layouts/AboutLayout';
import ContactLayout from './Layouts/ContactLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<AboutLayout/>}>
          <Route path='contact' element ={<ContactLayout/>}>
            <Route path=':name' element={<Name/>}/>
          </Route>
          <Route path='magic-cards' element={<MagicCards/>}/>
        </Route>
        <Route path='stories' loader = {storyLoader} element={<Stories/>}/>
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
