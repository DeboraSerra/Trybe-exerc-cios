import React from 'react';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Profile from '../images/Perfil.jpeg';
import Resume from '../images/Resume-Débora-Serra.pdf';

class Curriculum extends React.Component {
  render() {
    return (
      <section>
        <section>
          <h1>Débora Rodrigues Serra</h1>
          <img src={ Profile } alt="Débora Serra" />
          <hr />

          <h2>Contact</h2>
          <p><FaWhatsapp /> +55 61 98231 1582</p>
          <p><FiMail /> debora.r.serra@gmail.com</p>
          <p><FaGithub />https://github.com/DeboraSerra</p>
          <hr />

          <h2>Academic graduation</h2>
          <hr />
          <section>
            <p>2021 - 2022</p>
            <p>Web development - Trybe</p>
          </section>
          <section>
            <p>2018 - 2019</p>
            <p>Specialization in gastronomy and authorial cook - PUCRS</p>
          </section>
          <section>
            <p>2014 - 2016</p>
            <p>Masters degree in chemistry - UnB</p>
          </section>
          <section>
            <p>2014 - 2016</p>
            <p>MBA in cosmetics technology - ICosmetologia</p>
          </section>
          <section>
            <p>2010 - 2014</p>
            <p>Graduation in chemistry - UnB</p>
          </section>
          <hr />

          <h2>Professional history</h2>
          <hr />
          <section>
            <p>05/2021 - 10/2021</p>
            <p>Health agent in Andradas/MG</p>
          </section>
          <section>
            <p>02/2020 - 12/2020</p>
            <p>Chemistry technitian in Andradas/MG</p>
          </section>
          <section>
            <p>01/2018 - 08/2018</p>
            <p>Sales assistant in Comunhão Espírita de Brasília, Brasília/DF</p>
          </section>
          <section>
            <p>10/2014 - 10/2016</p>
            <p>Intern in EMBRAPA - Agroenergy, Brasília/DF</p>
          </section>
          <hr />

          <h2>Languages</h2>
          <hr />
          <section>
            <p>English</p>
            <p>Level: Intermediary</p>
          </section>
          <section>
            <p>Portuguese</p>
            <p>Level: Native</p>
          </section>
          <section>
            <p>French</p>
            <p>Level: Beginer</p>
          </section>
          <hr />
          <p>Brasília, march, 13th, 2022.</p>
        </section>
        <button type="button">
          <a href={ Resume } download="Resume-Débora-Serra.pdf">
            Download resume
          </a>
        </button>
      </section>

    )
  }
}

export default Curriculum;
