import React from 'react';
import RenderPhoto from './RenderPhoto';

class DogPhotos extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      names: '',
      loading: true,
    }
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getStorage = this.getStorage.bind(this);
  }

  fetchApi() {
    this.setState({ loading: true }, async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const { message } = data;
      const messageArr = message.split('/');
      const newBreed = messageArr[messageArr.length - 2];
      this.setState(({photo, breed}) => ({
        photo: photo ? [...photo, message] : [message],
        breed: breed ? [...breed, newBreed] : [newBreed],
        loading: false,
      }))
    })
  }

  handleChange({key, target}) {
    if (key === 'Enter') {
      this.setState({
        names: target.value,
      })
    }
  }

  handleClick() {
    this.setState({names: ''});
    this.fetchApi();
  }

  getStorage() {
    const myPhoto = localStorage.getItem('dogPhoto');
    const photo = myPhoto.split(',');
    const dogName = localStorage.getItem('dogName');
    const urlArr = photo[photo.length - 1].split('/');
    const breed = urlArr[urlArr.length - 2];
    this.setState({
      photo: [photo[photo.length - 1]],
      breed: [breed],
      names: dogName,
      loading: false,
    })
  }

  componentDidMount() {
    const myPhoto = localStorage.getItem('dogPhoto');
    if(myPhoto === 'undefined' || !myPhoto) {
      this.fetchApi();
    } else {
      this.getStorage();
    }
  }

  componentDidUpdate() {
    const { photo, names } = this.state;
    localStorage.setItem('dogPhoto', photo);
    localStorage.setItem('dogName', names);
  }

  render() {
    const { names, photo, loading, breed } = this.state;
    const loadingElement = <div className='loading' />;
    return (
      <section>
        {loading ? loadingElement : <RenderPhoto name={names} photo={photo[photo.length - 1]} breed={breed[photo.length - 1]} />}
        <input
          className='name-input'
          type="text"
          onKeyUp={this.handleChange}
          placeholder='Choose a name for this dog'  
        />
        <button onClick={this.handleClick}>Next dog</button>
      </section>
    )
  }
  componentWillUnmount() {
    localStorage.removeItem('dogPhoto');
  }

  componentDidCatch(error) {
    console.log(error);
  }
}

export default DogPhotos;
