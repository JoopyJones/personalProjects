import { Link, Outlet } from "react-router-dom";


export  default function CardsLayout(){
    return(
        <div className="cards-header">
            <h1>Magic Cards</h1>
            <div className="card-nav-header">
                <Link to='search'>Card Search</Link>
                <Link to='./'>My Favorite Cards</Link>
                <Link to='random'>Random Cards</Link>
            </div>
            <Outlet/>
        </div>
    )
}