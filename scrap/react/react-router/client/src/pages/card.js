//react-router-dom
import { useLoaderData, useParams} from "react-router-dom";

//redux
import { useSelector } from "react-redux";
import DeleteCard from "../components/deleteCard";

//data from file 
// import { faveCardList } from "../data/faveCardList";

export function Card(){
    //const card = useLoaderData();

    const {card_name} = useParams();
    const cardList = useSelector(state => state.cardList);

    //find the requested card
    const retCardArray = cardList.filter((card)=>{
        return card.name.replaceAll("/","").replaceAll(" ", "_") === card_name.toString();
    });

    //pull out the first result, just in case there are multiples
    const [card] = retCardArray;

    //TODO - now that we are not throwing the error in a loader function, the error isn't caught
    //      will probably have to write jsx instead of having the route handle it
    if(card == null)
    {
        //throw Error(`Card with name ${card_name} could not be found!`)
    }

    return(
        (card && (<div className="card-header">
                    <div key={card.name} id="card">
                        <div id="card-image">
                            <img src={card.normal_image} alt=""></img>
                        </div>
                        <div id="deleteButton">
                            <DeleteCard card={card}/>
                        </div>
                        <h3>{card.name}</h3>
                        <p>{card.rule_text}</p>
                    </div>
                </div>))
    )

}

export async function cardLoader({params}){
    const {card_id} = params; //passed in parameter for the specific data to load
    
    // const cardList = faveCardList;

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