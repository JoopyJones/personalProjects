import { Link, Outlet } from "react-router-dom";

export default function CardSearchLayout(){
    return(
        <div className="card-search-layout-header">
            <div className="card-search-options">
                <Link to="search">Search for a Card</Link>
                <Link to="random">Random Card</Link>
            </div>
            <div className="card-search">
                <Outlet/>
            </div>
        </div>
    )
}