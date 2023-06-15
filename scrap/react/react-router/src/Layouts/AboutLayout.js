import { NavLink, Outlet } from "react-router-dom";

function AboutLayout(){

    return(
        <div className="about-main">
            <h2>Hello Welcome to the About Section of the Website</h2>
            <p>blah blah blah blah</p>
            <div>
                <NavLink to='contact'>Contact</NavLink>
                <NavLink to='magic-cards'>Magic Cards!</NavLink>
            </div>

            <Outlet/>
        </div>
    )
}

export default AboutLayout;