import React from "react";
import './Aboutus.scss';
import Header from "../../Component/Header/Header";
import Card from "../../Component/Card/Card";

const Aboutus = () => {
  return (
    <div>
      <Header />
      <section className="about">
        <h3 className="about-title">
          What We Are
        </h3>
        <div className="about-description">
          Today, industries are reshaping and reimaging what they make and how they do it. Virtual healthcare. Remote education. Smarter shopping. Smarter technology must be made for all. As a Fortune Global 500 technology company and one of Fortune Magazine’s World’s Most Admired Companies, we think and act globally. Breakthroughs aren’t born in a bubble, and it takes all kinds of people and points of view to make technology smart. We’re proud to leverage the diversity of our more than 63,000 employees to serve customers in 180 markets to redefine and stretch the limits of what technology can do.

          We believe we can impact society most when we work together. That’s why we have committed to the GSMA Digital Declaration that identifies shared values across the technology industry for an ethical digital future.

          And that starts with making sure all voices are heard within and outside or our company. We’ve signed on to the Valuable 500, which aims to:

        </div>
        <div className="cards">
          <Card
            cardhead="lenovo summary"
            cardpara="Today, industries are reshaping and reimaging what they make and how they do it. Virtual healthcare."
          />
           <Card
            cardhead="lenovo summary"
            cardpara="Today, industries are reshaping and reimaging what they make and how they do it. Virtual healthcare."
          />
           <Card
            cardhead="lenovo summary"
            cardpara="Today, industries are reshaping and reimaging what they make and how they do it. Virtual healthcare."
          />

        </div>

      </section>
    </div>
  )
}

export default Aboutus
