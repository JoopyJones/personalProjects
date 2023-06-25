import { Link, useLoaderData } from "react-router-dom";

//using js file to load in card list
// import { faveCardList } from "../data/faveCardList"

export function Cards(){
    const cards = useLoaderData();

    return(
        <div className="card-list">
            {cards.map((card)=>{
                return(<Link to={card._id} key={card._id}>
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
export async function cardsLoader(){
    //const cardsList = faveCardList;
    const cardsList = await fetch('http://localhost:4000/favCardList');
    const cardData = await cardsList.json();

    return cardData;
}