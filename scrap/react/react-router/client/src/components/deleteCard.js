//redux
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CARD } from "../redux/reducers/cardListSlice";

//router
import { useNavigate } from "react-router-dom";

export default function DeleteCard({card}){
    const targetCard = card;
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const currentCards = useSelector(state => state.cardList);

    //this function checks if the target card exists in the list, if so will delete from db and store
    const handleDeleteCardFromList = async (targetCard)=>{
        
        var cardInList = false;

        //check if this card already exists in the store - if so we already have it in the db
        for(let existingCard of currentCards)
        {
            if(targetCard.name === existingCard.name)
            {
                cardInList = true;
                break;
            }
        }

        if(cardInList)
        {
            console.log(`CLIENT - Card ${targetCard.name} was found in list, attempting to remove`);
            try{

                const dbServer = 'http://localhost:4000/favCardList';
                var httpRequestOptions= {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: null
                }
                
                const cardDataToRemove = {
                    name: targetCard.name,
                    small_image: targetCard.small_image,
                    normal_image: targetCard.normal_image,
                    rule_text: targetCard.rule_text
                };
    
                httpRequestOptions.body=JSON.stringify(cardDataToRemove);
    
                const response = await fetch(dbServer, httpRequestOptions);
    
                if(!response.ok)
                {
                    console.log("CLIENT - The card could not be removed from the database");
                }
                else
                {
                    //remove target card from store
                    dispatch(REMOVE_CARD(cardDataToRemove));
                    navigate("/cards/");
                }
            }
            catch(e)
            {
                console.log(e);
            }
        }
        else{
            console.log(`CLIENT - Card ${targetCard.name} not found in list, skipping delete`);
        }
    }

    return(
        <div className="delete-card-hearder">
            <button onClick={()=>{
                handleDeleteCardFromList(targetCard)
            }}>Delete Card from List</button>
        </div>
    )
}