import React from "react";
import { connect } from 'react-redux';
import { removeFromList } from '../redux/actions';

class ClientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false,
      sortedClients: [...props.clients]
    }
  }

  sortClients = () => {
    this.setState((prevSt) => ({
      sort: !prevSt.sort,
    }));
  }

  render() {
    const { sortedClients, sort } =this.state;
    const { clients, removeFromList } = this.props;
    return (
      clients.length === 0 ? <p>No clients registered</p> : (
        <>
        <button type="button" onClick={ this.sortClients }>Sort clients</button>
          <ul>
            {sort && sortedClients
              .sort((a, b) => a.name > b.name ? 1 : -1)
              .map((client) => (
                <li key={ client.id }>
                  <button type="button" onClick={ () => removeFromList(client) }>X</button>
                  <p>{client.name}</p>
                  <p>{client.age}</p>
                  <p>{client.email}</p>
                </li>
              ))
            }
            {!sort && clients.map((client) => (
              <li key={ client.id }>
                <button type="button" onClick={ () => removeFromList(client) }>X</button>
                <p>{client.name}</p>
                <p>{client.age}</p>
                <p>{client.email}</p>
              </li>
            ))}
          </ul>
        </>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientListReducer.clients,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromList: (client) => dispatch(removeFromList(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);
