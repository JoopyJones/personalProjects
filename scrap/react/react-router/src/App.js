import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';

//layouts
import RootLayout from './layouts/rootLayout';
import CardsLayout from './layouts/cardsLayout';

//pages
import Home from './pages/home';
import {Cards, cardsLoader} from './pages/cards';
import {Card, cardLoader} from './pages/card';

//error pages
import NoPage from './pages/errorPages/noPage';
import NoCard from './pages/errorPages/noCard';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='cards' element={<CardsLayout/>}>
          <Route index loader={cardsLoader} element={<Cards/>}/>
          <Route path=':card_id' loader={cardLoader} errorElement={<NoCard/>} element={<Card/>}/>
        </Route>
        <Route path='*' element={<NoPage/>}/>
      </Route>
    )
  ) 

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router ={router}/>
      </header>
    </div>
  );
}

export default App;
