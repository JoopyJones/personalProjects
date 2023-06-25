import { useLoaderData} from "react-router-dom";
// import { faveCardList } from "../data/faveCardList";

export function Card(){
    const card = useLoaderData();

    return(
        <div className="card-header">
            <div key={card._id} id="card">
                <div id="card-image">
                    <img src={card.normal_image} alt=""></img>
                </div>
                <h3>{card.name}</h3>
                <p>{card.rule_text}</p>
            </div>
        </div>
    )

}

export async function cardLoader({params}){
    const {card_id} = params; //passed in parameter for the specific data to load
    // const cardList = faveCardList; //the array of cards we need to search through to find the requested card

    //TODO LATER INSTEAD OF FETCHING DATA AGAIN, USE REDUX TO PASS IN CARD LIST
    const cardsList = await fetch('http://localhost:4000/favCardList');
    const cardData = await cardsList.json();

    //find the requested card
    const retCardArray = cardData.filter((card)=>{
        return card._id === card_id.toString();
    });

    //pull out the first result, just in case there are multiples
    const [retCard] = retCardArray;

    if(retCard == null)
    {
        throw Error(`Card with id ${card_id} could not be found!`)
    }

    return retCard;
}