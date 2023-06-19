import { useLoaderData} from "react-router-dom";
import { faveCardList } from "../data/faveCardList";

export function Card(){
    const card = useLoaderData();

    return(
        <div className="card-header">
            <div key={card.id} id="card">
                <div id="card-image">
                    <img src={card.normal_image} alt=""></img>
                </div>
                <h3>{card.name}</h3>
                <p>{card.rule_text}</p>
            </div>
        </div>
    )

}

export function cardLoader({params}){
    const {card_id} = params; //passed in parameter for the specific data to load
    const cardList = faveCardList; //the array of cards we need to search through to find the requested card

    //find the requested card
    const retCardArray = cardList.filter((card)=>{
        return card.id === card_id.toString();
    });

    //pull out the first result, just in case there are multiples
    const [retCard] = retCardArray;

    if(retCard == null)
    {
        throw Error(`Card with id ${card_id} could not be found!`)
    }

    return retCard;
}