import { Link, useLoaderData } from "react-router-dom";
import { faveCardList } from "../data/faveCardList"

export function Cards(){
    const cards = useLoaderData();

    return(
        <div className="card-list">
            {cards.map((card)=>{
                return(<Link to={card.id} key={card.id}>
                            <div className="individual-card">
                                <h3>{card.name}</h3>
                                <img src={card.small_image} alt=""></img>
                            </div>
                        </Link>)
            })}
        </div>
    )
}

//loader function that will grab an array of cards and their specific information
// to pass to this component before it's rendered
export function cardsLoader(){
    const cardsList = faveCardList;

    return cardsList;
}