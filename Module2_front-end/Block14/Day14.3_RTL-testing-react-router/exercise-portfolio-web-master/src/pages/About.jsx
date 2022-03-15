import React from 'react';
import Fred from '../images/Fred.jpg';
import Brasília from '../images/Brasília.jpeg';
import '../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <section className="about-sect">
        <section className="city-sect">
          <img className="brasilia" src={ Brasília } alt="Map of Brazilia" />
          <p className="about-p1">I am brazilian, born in Brazilia - DF. I've lived for two months in Itapema/SC and for one year and eight months in Andradas/MG.</p>
        </section>

        <p className="about-p2">I am 29 years old, I like to watch movies and TV series, learn new things, read, dye my hair, a little of everything.</p>

        <section className="fred-sect">
          <p className="about-p3">I'm the mother of this beautiful dog called Fred Weasley.</p>
          <img className="fred" src={ Fred } alt="The most beautiful dog!" />
        </section>

        <p className="about-p4">My favorite music genre is Rock, but I listen a bit of almost everything, depending on the day (rsrs).</p>
      </section>
    );
  };
}

export default About;
