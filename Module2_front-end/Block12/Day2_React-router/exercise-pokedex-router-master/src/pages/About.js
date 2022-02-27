import React from "react";
import '../About.css';

class About extends React.Component {
  render() {
    return (
      <section className="about-sect">
        <img src="http://1.bp.blogspot.com/-LizoMRGaQ_c/UPIU6UknFXI/AAAAAAAAAUs/KKDynTNuwoo/s1600/pokedex-pro.png" alt="Pokedex" />

        <p>The Pokédex is an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to a particular region, while the National Pokédex records information about all known Pokémon. While the concept of a Pokédex has existed for a long period, the digital version of it is a more recent invention created by Professor Oak.</p>

        <p>Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.</p>

        <footer>
          <p>Information extracted from <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex">Bulbapedia</a></p>
        </footer>
      </section>
    )
  }
}

export default About;
