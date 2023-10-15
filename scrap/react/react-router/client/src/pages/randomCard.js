//components
import AddCard from "../components/addCard";

//react
import { useState } from "react";

export default function RandomCard(){
    const url = 'https://api.scryfall.com/';
    const group = 'cards/';
    const action = 'random';
    const [card, setCard] = useState([]);

    async function searchForRandomCards(){
        var cardList = [];

        const response = await fetch(`${url}${group}${action}`);
        const data = await response.json();
        cardList.push(data);

        setCard(cardList);
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
            <button onClick={searchForRandomCards}>Return Random Cards<br/>*Click for Scryfall, Shift-Click for TCGPlayer*</button>
            {card[0] && <AddCard card={card[0]}/>}
            {card.map((c)=>{
                return(
                    <div key={c.name} className="magicCard">
                        <img src={c.image_uris.normal} onClick={(e)=>{
                            handleCardUri(e,c);
                        }} alt=""></img>
                    </div>
                )
            })}
        </div>
    )
}