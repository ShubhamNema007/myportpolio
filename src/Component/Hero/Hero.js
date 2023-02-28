import React from "react";
import './Hero.scss';
import { image } from "../../Config/Image";

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-main">
                    <div className="hero-main-description">
                        <h3 className="hero-head">
                           Welcome to lenovowebpage 
                        </h3>
                        <p className="hero-para">Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices. Now, #286 on fortune 500 list, Lenovo is the world's largest PC vendor and fourth largest smartphone company.</p>
                    </div>
                    <img src={image.lenovobanner} className="hero-img"></img>
                </div>
            </section>
        </div>
    )
}

export default Hero
