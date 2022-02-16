import React from "react";
import './Live-class.css';

class CourseForm extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }


  }

  handleChange(name, {target}) {
    this.setState({ [name]: target.value })
  }
  render() {
    return (
      <section className="course">
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <label htmlFor="">
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea 
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={() => this.handleChange('estadoFavorito')}
            />
          </label>

          <label htmlFor="">
            E-mail
            <input 
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="">
            Nome
            <input type="text" name="nome" id="" />
          </label>
        </form>

        <label htmlFor="">
          Idade
          <input type="number" name="idade" id="" />
        </label>

        <label htmlFor="">
          Vai comparecer à conferência?
          <input type="checkbox" name="vaiComparecer" id="" />
        </label>

        <label htmlFor="">
          Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita" id="">
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </section>

    )
  }
}

export default CourseForm;