import { Link, useRouteError } from "react-router-dom"

export default function NoCard(){
    //use this hook to get the error's information
    const err = useRouteError();

    return(
        <div className="err-card-not-found-header">
            <h1>{err.message}</h1>
            <Link to='../'>Return Back to Card List</Link>
        </div>
    )
}