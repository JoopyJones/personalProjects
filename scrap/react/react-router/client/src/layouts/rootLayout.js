//react-router-dom
import { Link, Outlet } from "react-router-dom";

//components
import Crumbs from "../components/crumbs";

export default function RootLayout(){

    return(
        <div className="root-header">
            <section className="root-nav">
                <nav>
                    <h1>Headcrabs, Where!?</h1>
                    <Link to='/'>Home Page</Link>
                    <Link to='cards'>Fav. Cards</Link>
                    <Link to='/gooba'>TODO</Link>
                </nav>
                <Crumbs/>
            </section>
            <section className="root-routes-header">
                <Outlet/>
            </section>
        </div>
    )
}