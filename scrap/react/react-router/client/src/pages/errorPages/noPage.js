import { Link } from "react-router-dom";

export default function NoPage(){
    return(
        <div className="four-oh-four-header">
            <h1>Ooops, looks like this page doesn't exist, watch out, the 404 headcrabs can see you!!!!</h1>
            <div id="error-image">
                <img src='https://technabob.com/blog/wp-content/uploads/2014/03/half-life-2-headcrab-hat-from-thinkgeek.jpg' alt=""></img>
            </div>
            <Link to='/'>Return Home to Safety</Link>
        </div>
    )
}