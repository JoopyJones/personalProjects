//components
import AddCard from "../components/addCard";

//react
import { useState } from "react";

export default function RandomCard(){
    const url = 'https://api.scryfall.com/';
    const group = 'cards/';
    const action = 'random';
    const [card, setCard] = useState();

    async function searchForRandomCards(){

        const response = await fetch(`${url}${group}${action}`);
        var cardData = await response.json();

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

        setCard(cardData);
    }

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
        <div className="magicCardSearch-main">
            <h2>Random Magic Card</h2>
            <button onClick={searchForRandomCards}>Return Random Cards</button>
            {card && <AddCard card={card}/>}
            {card && <div key={card.name} className="magicCard">
                        <img src={card.image_uris.normal} onClick={(e)=>{
                            handleCardUri(e,card);
                        }} title="*Click for Scryfall, Shift-Click for TCGPlayer*" alt=""></img>
                    </div>}
        </div>
    )
}