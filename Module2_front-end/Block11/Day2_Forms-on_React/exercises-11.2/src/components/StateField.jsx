import React from "react";
import PropTypes from 'prop-types';

class StateField extends React.Component {
  render() {
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocntins', 'Distrito Federal'];

    const values = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df'];

    const { handleChange, value } = this.props;
    return (
      <select
        name="state"
        value={value}
        onChange={handleChange}
      >
        <option value={''}>Choose your State</option>
        {states.map((state, index) => <option key={index} value={values[index]}>{state}</option>)}
      </select>
    )
  }
}

StateField.propTypes = {

  handleChange: PropTypes.func.isRequired,
}

export default StateField;