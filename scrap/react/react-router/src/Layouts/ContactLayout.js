import { Outlet } from "react-router-dom";

function ContactLayout(){

    return(
        <div>
            <h2>Contact</h2>
            <Outlet/>
        </div>
    )
}

export default ContactLayout;