import { NavLink, Outlet } from "react-router-dom";

function RouterLayout(){
    return(
        <div>
            <nav className='navBar'>
                <h1 className='navTitle'>Welcome!</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='stories'>Stories</NavLink>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default RouterLayout;