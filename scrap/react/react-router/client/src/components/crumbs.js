//react-router-dom
import {Link, useLocation } from "react-router-dom";

export default function Crumbs(){
    //this hook will return to us the current path on every render
    const pathLocation = useLocation();

    //this parses the current path, splits it by / to find the individual pages,
    // then only returns the non empty strings (will return '' for leading and trailing /)
    const pathPages = pathLocation.pathname.split('/').filter((crumb)=>{
        return crumb;
    });

    const crumbs = pathPages ? ['/', ...pathPages] : [''];

    var breadPair = [];
    crumbs.reduce((prev,curr)=>{
        let x = prev === '/' ? '' : prev;
        let y = curr === '/' ? '' : curr;

        breadPair.push({path: `${x}/${y}`,
                        name: curr});

        return `${x}/${y}`;
    },'/')

    return(
        <div className="crumbs-header">
            {breadPair.map((pair)=>{
                //if the current path section is root, print home instead
                return(
                    <Link className="crumb" key={pair.path} to={pair.path}>{pair.name === '/' ? 'Home': pair.name}</Link>
                )
            })}
        </div>
    )
}