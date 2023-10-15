//components
import AddCard from "../components/addCard";
//react-router-dom
import { Form, useActionData } from "react-router-dom";

export  function CardSearch(){
    const searchRes = useActionData();

    //handles click events on card images
    function handleCardUri(e,c){
        if(e.shiftKey){
            window.open(c.purchase_uris.tcgplayer,'_blank').focus();
        }
        else{
            window.open(c.scryfall_uri,'_blank').focus();
        }
    }

    return(
        <div className="card-search-header">
            <Form method="post" action="/cards/card-search/search">
                <input type="text" name="card_name" placeholder="Enter a Card Name"></input>
                <button type="submit">Search</button>
                {searchRes && searchRes.object && <AddCard card={searchRes}/>}
            </Form>
            <div className="card-search-error">
                {searchRes && searchRes.error_message && <p>{searchRes.error_message}</p>}
                {searchRes && searchRes.object && <div className="card-from-search">
                        <div>
                            <img src={searchRes.image_uris.normal} onClick={(e)=>{
                                handleCardUri(e,searchRes);
                            }} title="*Click for Scryfall, Shift-Click for TCGPlayer*" alt=""></img>
                        </div>
                        <p>{searchRes.oracle_text}</p>
                    </div>}
            </div>
        </div>
    )
}

export async function handleCardSearch({request}){
    const url = 'https://api.scryfall.com/';
    const group = 'cards/';
    const searchType = 'named?exact='
    

    const req = await request.formData();
    const searchVal = req.get('card_name')

    if(searchVal)
    {
        const validSearchVal = searchVal.replace(' ', '+');
        const searchResponse = await fetch(`${url}${group}${searchType}${validSearchVal}`);

        if(!searchResponse.ok)
        {
            return{error_message: 'Card Could Not Be Found - Please Try Another Search'}
        }

        var cardData = await searchResponse.json();

        //if we don't have image_uris, then we know we have a double faced card
        //need to grab required info from first face
        if(!cardData.image_uris)
        {
            cardData = {
                ...cardData,
                image_uris:{
                    small: cardData.card_faces[0].image_uris.small,
                    normal: cardData.card_faces[0].image_uris.normal
                },
                oracle_text: cardData.card_faces[0].oracle_text
            }

        }
        
        return cardData;
    }
    else{
        return{error_message: 'Search Was Empty - Please Enter Something'}
    }

}