import { Form, useActionData } from "react-router-dom";
import AddCard from "../components/addCard";

export  function CardSearch(){
    const searchRes = useActionData();

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
                            <img src={searchRes.image_uris.small} alt=""></img>
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

        const cardsearchData = await searchResponse.json();
        
        return cardsearchData;
    }
    else{
        return{error_message: 'Search Was Empty - Please Enter Something'}
    }

}