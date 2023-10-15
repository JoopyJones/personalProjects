//react-router-dom
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { ADD_CARD, CLEAR_CARDS } from './redux/reducers/cardListSlice';

//pages
import Home from './pages/home';
import {Cards, cardsLoader} from './pages/cards';
import {Card, cardLoader} from './pages/card';
import RandomCard from './pages/randomCard';
import {CardSearch, handleCardSearch} from './pages/cardSearch';

//layouts
import RootLayout from './layouts/rootLayout';
import CardsLayout from './layouts/cardsLayout';
import CardSearchLayout from './layouts/cardSearchLayout';

//error pages
import NoPage from './pages/errorPages/noPage';
import NoCard from './pages/errorPages/noCard';

//styling
import './App.css';

function App() {
  const dispatch = useDispatch();

    async function getCardsFromDb(){
      //this clears the state to avoid duplicating cards in store. happends from saving code during dev
      dispatch(CLEAR_CARDS());

      const cardsList = await fetch('http://localhost:4000/favCardList');
      const cardData = await cardsList.json();
      
      for(let card of cardData){
        dispatch(ADD_CARD(card));
      }
    };

    //grab all cards from database and load into store
    getCardsFromDb();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='cards' element={<CardsLayout/>}>
          {/* This is used for when we are not using redux. loader will query database */}
          {/* <Route index loader={cardsLoader} element={<Cards/>}/> */}
          <Route index element={<Cards/>}/>
          {/* This is used for when we are not using redux. loader will query database */}
          {/* <Route path=':card_id' loader={cardLoader} errorElement={<NoCard/>} element={<Card/>}/> */}
          <Route path=':card_name' errorElement={<NoCard/>} element={<Card/>}/>
          <Route path='card-search' element={<CardSearchLayout/>}>
            <Route path='search' element={<CardSearch/>} action={handleCardSearch}/>
            <Route path='random' element={<RandomCard/>}/>
          </Route>
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
