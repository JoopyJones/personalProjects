/* 

    TODO: Fix the page from double loading, preventing
            - this is happening from the promises somehow
            - the loader loads the correct data, displays it, then somehow calls the loader logic again
              and then overwrites the original data, deleting/hiding the character info

    LOADER DATA STRUTURE:
            [
                {
                    title:
                    author:
                    povCharacters: [
                        {
                            name:
                            gender:
                        }
                    ]
                }
            ]

*/




import { useLoaderData } from "react-router-dom";

export function Stories(){
    const books = useLoaderData();
    return(
        
        <div className="stories-main">
            {books.map((book)=>{
               return(
                <div>
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                    {book.povCharacters.map((character)=>{
                        return <p>{character.name}, {character.gender}</p>
                    })}
                </div>
               )
            })}
            <h1>gooba</h1>
        </div>
    )
}

export const storyLoader = async ()=>{
    console.log('Start Loader');

    // get the array of books
    const response = await fetch('https://www.anapioficeandfire.com/api/books');
    const data = await response.json();

    //for each book let's grab the title, author, and an array of charcters
    const ret = data.map((each)=>{
        const povCharsRefs = each.povCharacters;
        var povChars = [];

        Promise.all(

            //each element of the povCharacters array is a url that points to an object with the
            //character's details. We need to fetch the character object, then add it to return array.
            povCharsRefs.map(async (charRef)=>{
                const response = await fetch(charRef);
                const data = await response.json();

                povChars.push({name: data.name, gender: data.gender});
        }));
        
        return {
            title: each.name,
            author: each.authors[0],
            povCharacters: povChars
        };
    });

    console.log(ret);

    return ret;
};



