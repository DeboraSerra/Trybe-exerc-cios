import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import '../styles/Header.css';

const userAPI = require('../services/userAPI');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState({ user: await userAPI.getUser() });
  }

  render() {
    const { user } = this.state;
    return (
      <header className="header" data-testid="header-component">
        {!user ? <Loading /> : (
          <>
            <section className="flex-container-h">
              <img className="logo" src="https://www.pngitem.com/pimgs/m/116-1163025_music-icon-png-free-download-desenho-de-notas.png" alt="Music symbol" />
              <section className="user-sect flex-container-h">
                <img className="user-img" src={ user.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZj7Bw_2d3u3gfWIrySXIloU1J1LsU9sdt6WUuWT-XZFxMBbqhibD2bM3zhMXc639XhQ&usqp=CAU' } alt="User silhouette" />
                <h1 className="user-title" data-testid="header-user-name">{user.name}</h1>
              </section>
            </section>
            <nav className="nav-links flex-container-h">
              <Link
                className="link"
                data-testid="link-to-search"
                to="/search"
              >
                Search
              </Link>
              <Link
                className="link"
                data-testid="link-to-favorites"
                to="/favorites"
              >
                Favorites
              </Link>
              <Link
                className="link"
                data-testid="link-to-profile"
                to="/profile"
              >
                Profile
              </Link>
            </nav>
          </>
        )}
      </header>
    );
  }
}

export default Header;
