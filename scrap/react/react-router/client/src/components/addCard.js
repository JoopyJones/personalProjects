//redux
import { useDispatch, useSelector } from "react-redux";
import { ADD_CARD } from "../redux/reducers/cardListSlice";

export default function AddCard({card}){
    const foundCard = card;

    const dispatch = useDispatch();
    const currentCards = useSelector(state => state.cardList);

    //this function checks if the new card exists in the list, and if not it will add to db and then to store
    const handleAddCardToList = async (foundCard)=>{
        var cardAlreadyInList = false;

        //check if this card already exists in the store - if so we already have it in the db
        for(let existingCard of currentCards)
        {
            if(foundCard.name === existingCard.name)
            {
                cardAlreadyInList = true;
                break;
            }
        }

        if(!cardAlreadyInList)
        {
            console.log(`CLIENT - Card ${foundCard.name} was not found in list, attempting to add`);
            try{

                const dbServer = 'http://localhost:4000/favCardList';
                var httpRequestOptions= {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: null
                }
                
                const cardDataToAdd = {
                    name: foundCard.name,
                    small_image: foundCard.image_uris.small,
                    normal_image: foundCard.image_uris.normal,
                    rule_text: foundCard.oracle_text
                };
    
                httpRequestOptions.body=JSON.stringify(cardDataToAdd);
    
                const response = await fetch(dbServer, httpRequestOptions);
    
                //TODO - will need to update server to send back statuses if card added or not, currently I think
                //          server will send back okay if it wasn't added.
                if(!response.ok)
                {
                    console.log("CLIENT - The card could not be added to the database");
                }
                else
                {
                    //add new card to store
                    dispatch(ADD_CARD(cardDataToAdd));
                }
            }
            catch(e)
            {
                console.log(e);
            }
        }
        else{
            console.log(`CLIENT - Card ${foundCard.name} was found in list, skipping add`);
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