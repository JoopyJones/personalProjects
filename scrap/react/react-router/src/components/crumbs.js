import {Link, useLocation } from "react-router-dom";

export default function Crumbs(){
    //this hook will return to us the current path on every render
    const pathLocation = useLocation();

    //this parses the current path, splits it by / to find the individual pages,
    // then only returns the non empty strings (will return '' for leading and trailing /)
    const pathPages = pathLocation.pathname.split('/').filter((crumb)=>{
        return crumb;
    });

    var crumbs = [''];

    if(pathPages)
    {
        crumbs = ['/', ...pathPages];
    }

    return(
        <div className="crumbs-header">
            {crumbs.map((path)=>{
                //if the current path section is root, print home instead
                return(
                    <Link className="crumb" id={path} to={path}>{path === '/' ? 'Home': path}</Link>
                )
            })}
        </div>
    )
}