import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { image } from "../../Config/Image";
import Button from "../Button/Button";


function Header() {
    return (
        <header className="header-main">
            <div className="menu">
                <img src={image.lenovoimg} className="lenovo-img"></img>
                <ul className="list-items-main">
                    <li className="list-items">
                        <NavLink to={'/'} >Home</NavLink>
                    </li>
                    <li className="list-items__style">
                        <NavLink to={'/about'} >Aboutus</NavLink>
                    </li>
                    <li className="list-items__style">
                        <NavLink to={'/'} >contactus</NavLink>
                    </li>
                </ul>
                <Button mainbtn={'login'}/>
            </div>
        </header>
    )
}

export default Header



