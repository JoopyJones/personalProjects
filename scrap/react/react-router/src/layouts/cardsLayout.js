import { Outlet } from "react-router-dom";


export  default function CardsLayout(){
    return(
        <div className="cards-header">
            <h1>Favorite Magic Cards</h1>
            <Outlet/>
        </div>
    )
}