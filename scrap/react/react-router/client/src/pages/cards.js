//redux
import { useSelector } from "react-redux";

//react-router-dom
import { Link, useLoaderData } from "react-router-dom";

//js file to load in card list
// import { faveCardList } from "../data/faveCardList"

export function Cards(){
    //const cards = useLoaderData();
    
    const cards = useSelector(state => state.cardList)

    return(
        <div className="card-list">
            {cards.map((card)=>{
                return(<Link to={card.name.replaceAll("/","").replaceAll(" ", "_")} key={card.name}>
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
//STRETCH GOAL: Instead of having this fetch data every time it's rendered, we should store all cards in redux
//              and then only re-fetch card list/update redux if we add or delete from the list
export async function cardsLoader(){
    //const cardsList = faveCardList;
    const cardsList = await fetch('http://localhost:4000/favCardList');
    const cardData = await cardsList.json();

    return cardData;
}