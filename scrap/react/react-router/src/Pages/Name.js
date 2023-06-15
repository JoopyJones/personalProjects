import {  useParams } from "react-router-dom"

export default function Name(){
    const {name} = useParams();

    return(
        <div>
            <p>{name}</p>
        </div>
    )
};

