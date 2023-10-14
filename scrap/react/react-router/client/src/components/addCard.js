import { useDispatch } from "react-redux";
import { ADD_CARD } from "../redux/reducers/cardListSlice";

export default function AddCard({card}){
    const foundCard = card;
    const dispatch = useDispatch();

    const handleAddCardToList = async (card)=>{

        const dbServer = 'http://localhost:4000/favCardList';
        var httpRequestOptions= {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: null
        }

        try{
            const cardDataToAdd = {
                name: card.name,
                small_image: card.image_uris.small,
                normal_image: card.image_uris.normal,
                rule_text: card.oracle_text
            };

            httpRequestOptions.body=JSON.stringify(cardDataToAdd);

            const response = await fetch(dbServer, httpRequestOptions);

            if(!response.ok)
            {
                //TODO
                console.log("The card could not be added to the database");
            }
            else
            {
                dispatch(ADD_CARD(cardDataToAdd));
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }

    return(
        <div className="add-card-hearder">
            <button onClick={()=>{
                handleAddCardToList(foundCard)
            }}>Add Card to List</button>
        </div>
    )
}