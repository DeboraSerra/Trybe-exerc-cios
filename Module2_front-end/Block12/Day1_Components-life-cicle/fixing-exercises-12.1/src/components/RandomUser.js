import React from 'react';
import User from './User';

class RandomUser extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      name: '',
      photo: '',
      email: '',
      age: '',
    }

    this.fetchApi = this.fetchApi.bind(this);
  }

  fetchApi() {
    this.setState({loading: true}, async () => {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const { name: { title, first, last }, email, dob: { age }, picture: { large } } = data.results[0];
      this.setState({
        loading: false,
        name: `${title} ${first} ${last}`,
        photo: large,
        email: email,
        age: age,
      })
    })
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_nextProps, { age }) {
    return age < 50;
  }

  render() {
    const { loading, name, email, photo, age } = this.state;
    const loadingElement = <div className='loading'></div>;
    return (
      <section className='card-parent'>
        {loading ? loadingElement : <User name={name} email={email} photo={photo} age={age} />}
        <button className="next-btn" onClick={this.fetchApi}>Next user</button>
      </section>
    )
  }
}

export default RandomUser;