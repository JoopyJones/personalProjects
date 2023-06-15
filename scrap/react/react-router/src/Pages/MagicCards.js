import { useState } from "react";

function MagicCards(){
    const url = 'https://api.scryfall.com/';
    const group = 'cards/';
    const action = 'random';
    const [card, setCard] = useState([]);

    async function searchForRandomCards(){
        var cardList = [];

        for(let i=0; i<3; i++)
        {
            const response = await fetch(`${url}${group}${action}`);
            const data = await response.json();
            cardList.push(data);
        }

        setCard(cardList);
    }

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

export default MagicCards;