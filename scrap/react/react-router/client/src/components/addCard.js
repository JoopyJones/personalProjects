export default function AddCard({card}){
    const foundCard = card;

    const handleAddCardToList = async (card)=>{
        const dbServer = 'http://localhost:4000';
        var httpRequestOptions= {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: null
        }

        try{
            httpRequestOptions.body=JSON.stringify(card);
            const response = await fetch(dbServer, httpRequestOptions);
            console.log(`client after fetch ${response.ok}`);
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